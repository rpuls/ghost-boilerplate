'use strict';

const StorageBase = require('ghost-storage-base');
const path = require('path');
const debug = require('@tryghost/debug')('adapter');
const cloudinary = require('cloudinary').v2;
const got = require('got');
const plugins = require('./plugins');
const { CloudinaryAdapterError } = require('./errors');

class CloudinaryAdapter extends StorageBase {
  constructor(options) {
    super(options);

    const config = options || {};
    const auth = config.auth || config;
    const uploadOptions = config.upload || {};
    const fetchOptions = config.fetch || {};

    this.useDatedFolder = config.useDatedFolder || false;
    this.plugins = config.plugins || {};
    this.uploaderOptions = {
      upload: uploadOptions,
      fetch: fetchOptions
    };

    debug('constructor:useDatedFolder:', this.useDatedFolder);
    debug('constructor:uploaderOptions:', this.uploaderOptions);
    debug('constructor:plugins:', this.plugins);

    cloudinary.config(auth);
  }

  exists(filename) {
    debug('exists:filename', filename);
    const pubId = this.toCloudinaryId(filename);

    return new Promise((resolve) => {
      cloudinary.uploader.explicit(pubId, { type: 'upload' }, (err) => {
        resolve(!err);
      });
    });
  }

  save(image) {
    // Creates a deep clone of Cloudinary options
    const uploaderOptions = JSON.parse(JSON.stringify(Object.assign({}, this.uploaderOptions)));

    // Forces the Cloudinary Public ID value based on the file name when upload option
    // "use_filename" is set to true.
    if (uploaderOptions.upload.use_filename !== 'undefined' && uploaderOptions.upload.use_filename) {
      Object.assign(
        uploaderOptions.upload,
        { public_id: path.parse(this.getSanitizedFileName(image.name)).name }
      );
    }

    // Appends the dated folder if enabled
    if (this.useDatedFolder) {
      uploaderOptions.upload.folder = this.getTargetDir(uploaderOptions.upload.folder);
    }

    debug('save:uploadOptions:', uploaderOptions);

    // Retinizes images if there is any config provided
    if (this.plugins.retinajs) {
      const retinajs = new plugins.RetinaJS(this.uploader.bind(this), uploaderOptions, this.plugins.retinajs);
      return retinajs.retinize(image);
    }

    return this.uploader(image.path, uploaderOptions, true);
  }

  uploader(imagePath, options, url) {
    debug('uploader:imagePath', imagePath);
    debug('uploader:options', options);
    debug('uploader:url', url);

    return new Promise((resolve, reject) => {
      cloudinary.uploader.upload(imagePath, options.upload, (err, res) => {
        if (err) {
          debug('cloudinary.uploader:error', err);
          return reject(new CloudinaryAdapterError({
            err: err,
            message: `Could not upload image ${imagePath}`
          }));
        }

        debug('cloudinary.uploader:res', res);

        if (url) {
          return resolve(cloudinary.url(res.public_id.concat('.', res.format), options.fetch));
        }
        return resolve();
      });
    });
  }

  serve() {
    return (req, res, next) => {
      next();
    };
  }

  delete(filename) {
    debug('delete:filename', filename);
    const pubId = this.toCloudinaryId(filename);

    return new Promise((resolve, reject) => {
      cloudinary.uploader.destroy(pubId, (err, res) => {
        if (err) {
          debug('delete:error', err);
          return reject(new CloudinaryAdapterError({
            err: err,
            message: `Could not delete image ${filename}`
          }));
        }
        return resolve(res);
      });
    });
  }

  read(options) {
    const opts = options || {};
    debug('read:opts', opts);

    return got(opts.path, {
      responseType: 'buffer',
      resolveBodyOnly: true
    }).catch(err => {
      debug('read:error', err);
      throw new CloudinaryAdapterError({
        err: err,
        message: `Could not read image ${opts.path}`
      });
    });
  }

  getSanitizedFileName(filename) {
    return filename.replace(/[^a-zA-Z0-9_-]/g, '-').toLowerCase();
  }

  toCloudinaryFile(filename) {
    const file = path.parse(filename).base;
    if (typeof this.uploaderOptions.upload.folder !== 'undefined') {
      return path.join(this.uploaderOptions.upload.folder, file);
    }
    return file;
  }

  toCloudinaryId(filename) {
    const parsed = path.parse(this.toCloudinaryFile(filename));
    return path.join(parsed.dir, parsed.name);
  }
}

module.exports = CloudinaryAdapter;
