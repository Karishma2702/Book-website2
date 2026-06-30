'use strict';

/**
 * contributer service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::contributer.contributer');
