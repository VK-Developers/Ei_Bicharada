const models = require('../database/models');

module.exports = {
    getAll: async () => {
        const sponsors = await models.sponsor.findAll();
        return sponsors;
    },
}