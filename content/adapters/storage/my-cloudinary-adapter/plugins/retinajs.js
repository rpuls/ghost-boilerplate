'use strict';

const debug = require('@tryghost/debug')('plugins:retinajs');
const { promisify } = require('util');
const sizeOf = require('image-size');
const getSizeAsync = promisify(sizeOf);
const maxSupportedDpr = 5;

class RetinaJS {
  constructor(uploader, uploaderOptions, retinajsOptions) {
    this.uploader = uploader;
    this.uploaderOptions = uploaderOptions || {};
    this.retinajsOptions = retinajsOptions || {};
    this.retinajsOptions.baseWidth = parseInt(this.retinajsOptions.baseWidth, 10);
    this.retinajsOptions.fireForget = this.retinajsOptions.fireForget || false;

    debug('constructor:retinajsOptions', this.retinajsOptions);

    if (typeof this.uploader !== 'function') {
      throw new TypeError('RetinaJS: uploader must be callable');
    }

    if (typeof this.uploaderOptions.upload === 'undefined' ||
        typeof this.uploaderOptions.upload.public_id === 'undefined' ||
        this.uploaderOptions.upload.public_id.length === 0
    ) {
      throw new TypeError('RetinaJS error: invalid uploaderOptions.upload.public_id. Ensure to enable Cloudinary upload.use_filename option.');
    }

    if (isNaN(this.retinajsOptions.baseWidth)) {
      throw new TypeError('RetinaJS config error: invalid retinajs.baseWidth option');
    }

    if (this.retinajsOptions.baseWidth < 1) {
      throw new RangeError('RetinaJS config error: retinajs.baseWidth must be >= 1');
    }
  }

  async retinize(image) {
    const maxDpr = await this.resolveMaxDpr(image.path);
    const configs = this.generateDprConfigs(maxDpr);
    const [head, ...tail] = configs;

    debug('retinize:configs', { head, tail });

    // Image is not retinizable: creates DPR 1.0 variant only
    if (tail.length === 0) {
      return this.uploader(image.path, head, true);
    }

    // Creates variants with proper error handling
    try {
      const url = await this.uploader(image.path, head, true);
      const finalUrl = this.sanitize(url);

      if (this.retinajsOptions.fireForget) {
        Promise.all(tail.map(c => this.uploader(url, c, false)))
          .catch(err => console.error(`Fire&Forget RetinaJS: ${err}`));
        return finalUrl;
      }

      await Promise.all(tail.map(c => this.uploader(url, c, false)));
      return finalUrl;
    } catch (err) {
      throw new Error(`RetinJS processing failed: ${err.message}`);
    }
  }

  sanitize(string) {
    return decodeURIComponent(string).replace(/@\dx(?!.*@\dx)/, '');
  }

  async resolveMaxDpr(filename) {
    try {
      const dimensions = await getSizeAsync(filename);
      const mdpr = Math.floor(dimensions.width / this.retinajsOptions.baseWidth);

      if (mdpr === 0) {
        return 1;
      }
      if (mdpr > maxSupportedDpr) {
        return maxSupportedDpr;
      }
      return mdpr;
    } catch (err) {
      debug('resolveMaxDpr:error', err);
      return 1;
    }
  }

  generateDprConfigs(dpr) {
    if (dpr < 1) {
      throw new RangeError(`Unexpected dpr value: ${dpr}`);
    }

    const configs = [];
    for (let i = dpr; i >= 1; i -= 1) {
      const config = JSON.parse(JSON.stringify(Object.assign({}, this.uploaderOptions)));
      const dprConfig = {
        width: this.retinajsOptions.baseWidth,
        if: `iw_gt_${this.retinajsOptions.baseWidth}`,
        crop: 'scale',
        dpr: `${i}.0`,
        tags: [`dpr${i}`]
      };

      if (i > 1) {
        dprConfig.public_id = `${config.upload.public_id}@${i}x`;
      }

      // Merge arrays instead of replacing them
      config.upload = {
        ...config.upload,
        ...dprConfig,
        tags: [...(config.upload.tags || []), ...dprConfig.tags]
      };
      
      configs.push(config);
    }
    return configs;
  }
}

module.exports = RetinaJS;
