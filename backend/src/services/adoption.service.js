const models = require('../database/models');
const { adoption: validation } = require('../validations');
const { authentication } = require('../tools')

module.exports = {
    getAll: async (accepted, token) => {
        const { region } = authentication.verifyToken(token);
        
        if (accepted === undefined) {
            const result = await models.adoption.findAll();
            return {status: 200, result};
        }
        
        const result = await models.adoption.findAll({
            where: {
                region,
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
    create: async (obj, token) => {
        const {email, region} = authentication.verifyToken(token)
 
        const validatedObj = await validation.new({...obj, user: email, region});

        await models.adoption.create(validatedObj);

        return {status: 201, msg: 'animal registrado sucesso'};
    },
}