const models = require('../database/models');

module.exports = {
    getAll: async () => {
        const result = await models.region.findAll({
            order: [['city', 'ASC']],
            attributes: {exclude: ['delegate', 'email', 'phone']}
        });
        return {status: 200, result};
    },
}