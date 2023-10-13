const models = require('../database/models');

module.exports = {
    getAll: async (accepted) => {
        if (accepted === undefined) {
            const result = await models.adoption.findAll();
            return {status: 200, result};
        }
        
        const result = await models.adoption.findAll({
            where: {
                accepted: JSON.parse(accepted)
              }
        });

        return {status: 200, result};
    },
    getById: async (id) => {
        const result = await models.adoption.findByPk(id);

        if (!result) return {status: 200, result: []};

        return {status: 200, result};
    },
}