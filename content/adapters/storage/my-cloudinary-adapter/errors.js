'use strict';

const { InternalServerError } = require('@tryghost/errors');

class CloudinaryAdapterError extends InternalServerError {
  constructor(options) {
    super({
      errorType: 'ImageStorageAdapterError',
      message: 'An error occurred while handling image storage.',
      level: 'error',
      ...options
    });
  }
}

module.exports = {
  CloudinaryAdapterError
};
