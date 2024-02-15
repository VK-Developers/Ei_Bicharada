const models = require('../database/models');

module.exports = {
    getAll: async () => {
        const recuedAnimals = await models.product.findAll({
            attributes: {exclude: ['createdAt', 'updatedAt']}
        });
        return recuedAnimals;
    },
}