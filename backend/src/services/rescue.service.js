const models = require('../database/models');

module.exports = {
    getAll: async () => {
        const products = await models.products.findAll({
            attributes: {exclude: ['createdAt', 'updatedAt']}
        });
        return products;
    },
}