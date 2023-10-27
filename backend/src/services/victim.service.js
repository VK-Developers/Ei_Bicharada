const models = require('../database/models');
// const { rescue: validation } = require('../validations');
const { authentication } = require('../tools');

module.exports = {
    getAll: async () => {
        const result = await models.victim.findAll(
            // {
            //     attributes: {exclude: ['created', 'name', 'phone', 'new']}
            // }
        );
        return {status: 200, result};
    },
    create: async(token) => {
        const {name, email, phone} = authentication.verifyToken(token);
        
        const newVictim = await models.victim.create({name, email, phone});

        return {status: 201, result: newVictim};
    },
    destroy: async (id) => {
        const requestDelete = await models.victim.destroy({ where: { id } });

        if (requestDelete !== 1) return {status: 204, result: null};

        return {status: 200, result: 'victime deleted'};
    }
}