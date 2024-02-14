const models = require('../database/models');

module.exports = {
    getAll: async () => {
        const raffles = await models.raffle.findAll({
            include: [
                {
                    model: models.region, 
                    as: 'raffleRegion',
                    attributes: { exclude: ['id'] }
                },
                {
                    model: models.rafflesNumber,
                    as: 'numbers',
                    attributes: { exclude: ['id', 'raffleId'] }
                }
            ],
            attributes: { 
                exclude: ['regionId']
            }
        });

        return raffles;
    },
    getById: async (id) => {
        const raffle = await models.raffle.findByPk(id);
        return raffle;
    },
}