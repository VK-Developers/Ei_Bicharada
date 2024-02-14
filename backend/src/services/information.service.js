const models = require('../database/models');

module.exports = {
    getAll: async () => {
        const infos = await models.information.findAll();
        return infos;
    },
}