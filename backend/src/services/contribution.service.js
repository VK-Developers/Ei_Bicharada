const models = require('../database/models');
const { authentication } = require('../tools');

module.exports = {
    getAll: async (token) => {
        const { region } = authentication.verifyToken(token);

        const result = await models.contribution.findOne({
            attributes: [
              [models.sequelize.fn('SUM', models.sequelize.col('amount')), 'totalAmount']
            ],
            where: {
              region,
            },
            raw: true, // Result will be a simple JavaScript Object
          });

        return {status: 200, result: result.totalAmount};
    },
}