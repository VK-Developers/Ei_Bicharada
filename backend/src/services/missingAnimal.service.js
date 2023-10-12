const models = require('../database/models');

module.exports = {
    getAll: async () => {
        console.log('aqq')
        const result = await models.missingAnimal.findAll();
        return {status: 200, result};
    },
    getById: async (id) => {
        const result = await models.missingAnimal.findByPk(id);
        if (!result) return {status: 200, result: []};
        return {status: 200, result};
    },
}