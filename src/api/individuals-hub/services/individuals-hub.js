'use strict';

/**
 * individuals-hub service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::individuals-hub.individuals-hub');
