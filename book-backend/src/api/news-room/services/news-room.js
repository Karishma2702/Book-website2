'use strict';

/**
 * news-room service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::news-room.news-room');
