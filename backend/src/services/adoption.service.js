const models = require('../database/models');
const { adoption: validation } = require('../validations');
const { authentication } = require('../tools');

module.exports = {
    getAll: async (accepted, token) => {
        // const { region } = authentication.verifyToken(token);
        
        // if (accepted === undefined || region === 'all') {
        //     const result = await models.adoption.findAll();
        //     return {status: 200, result};
        // }
        
        // const result = await models.adoption.findAll({
        //     where: {
        //         region,
        //         new: !JSON.parse(accepted)
        //       }
        // });

        // return {status: 200, result};
        
        const result = await models.adoption.findAll();
        return {status: 200, result};

    },
    getById: async (id) => {
        const result = await models.adoption.findByPk(id);

        if (!result) return {status: 200, result: []};

        return {status: 200, result};
    },
    create: async (obj, token) => {
        const {email, region, phone} = authentication.verifyToken(token);
 
        const validatedObj = await validation.new({...obj, user: email, region, contact: phone});

        await models.adoption.create(validatedObj);

        return {status: 201, msg: 'animal registrado sucesso'};
    },
    update: async(obj, id) => {
        const [updateAdopt] = await models.adoption.update(obj, {
            where: { id }
        });

        if (updateAdopt !== 1) return {status: 204, result: null};

        return {status: 200, result: 'adoption updated'};
    },
    destroy: async (id) => {
        const adoptionDeleted = await models.adoption.destroy({ where: { id } });

        if (adoptionDeleted !== 1) return {status: 204, result: null};

        return {status: 200, result: 'adoption deleted'};
    }
}
