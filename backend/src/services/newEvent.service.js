const models = require('../database/models');

module.exports = {
    getAll: async () => {
        const event = await models.newAndEvent.findAll();
        return event;
    },
}