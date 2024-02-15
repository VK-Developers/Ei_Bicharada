const models = require('../database/models');
const { authentication } = require('../tools');

module.exports = {
    getAll: async () => {
        const numbers = await models.rafflesNumber.findAll();
        return numbers;
    },
    getById: async (id) => {
        const number = await models.rafflesNumber.findByPk(id, {
            include: {
                model: models.raffle, 
                as: 'raffle',
                attributes: { exclude: ['id', 'regionId'] }
            },
            attributes: { 
                exclude: ['raffleId']
            }
        });
        
        return number;
    },
    create: async (obj, token) => {
        const { name, phone } = authentication.verifyToken(token);
        
        const isThereAny = await models.rafflesNumber.findOne({
            where: {
                number: obj.number,
                raffleId: obj.raffle,
            }
        });

        if (!isThereAny) {
            await models.rafflesNumber.create({
                number: obj.number,
                name,
                telefone: phone,
                raffleId: obj.raffle,
            });

            return {status: 201, msg: 'numero registrado'};
        }

        return {status: 400, msg: 'taken'};
    },
}