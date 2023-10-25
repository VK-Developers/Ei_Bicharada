const models = require('../database/models');
const { missingAnimal: validation } = require('../validations');
const { authentication } = require('../tools')

module.exports = {
    getAll: async (accepted, token) => {
        const { region } = authentication.verifyToken(token);

        if (accepted === undefined || region === 'all') {
            const result = await models.missingAnimal.findAll();
            return {status: 200, result};
        }
        
        const result = await models.missingAnimal.findAll({
            where: {
                region,
                new: !JSON.parse(accepted)
              }
        });

        return {status: 200, result};
    },
    getById: async (id) => {
        const result = await models.missingAnimal.findByPk(id);
        if (!result) return {status: 200, result: []};
        return {status: 200, result};
    },
    create: async (obj, token) => {
        const {email, region, phone} = authentication.verifyToken(token)
 
        const validatedObj = await validation.new({...obj, user: email, region, contact: phone});

        await models.missingAnimal.create(validatedObj);

        return {status: 201, msg: 'animal registrado sucesso'};
    },
}