const models = require('../database/models');
const { authentication } = require('../tools');

module.exports = {
    getAll: async (token) => {
        const { region } = authentication.verifyToken(token);

        const totalUsers = await models.user.count()
        const regionUsers = await models.user.count({
          where: {region}
        })

        const result = await models.contribution.findOne({
            attributes: [
              [models.sequelize.fn('SUM', models.sequelize.col('amount')), 'totalAmount']
            ],
            // where: {
            //   region,
            // },
            raw: true, // Result will be a simple JavaScript Object
          });

        return {status: 200, result: result.totalAmount * (regionUsers / totalUsers)};
    },
}