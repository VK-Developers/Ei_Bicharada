const models = require('../database/models');
const { user: validation } = require('../validations')

module.exports = {
    getAll: async () => {
        const result = await models.adoption.findAll();

        return {status: 200, result};
    },
    getById: async (id) => {
        const result = await models.adoption.findByPk(id);

        if (!result) return {status: 200, result: []};

        return {status: 200, result};
    },
    update: async(obj, id) => {
        const [updatedUser] = await models.user.update(obj, { where: { id } });
        return updatedUser;
    },
    create: async(data, password) => {
        const validatedObj = await validation.newUser(data);
        const doesUserExists = !!await models.user.findOne(
            { 
                where: { 
                    email: validatedObj.email
                }
            }
        );
        
        if (!doesUserExists) {
            await models.user.create(validatedObj);
            await models.login.create({
                email: validatedObj.email,
                password
            })
            return {status: 201, msg: 'usuario criado com sucesso'};
        }
        
        return {status: 409, msg: 'usuario ja existe'};
    },
    destroy: async(id) => {
        const userDeleted = await models.user.destroy({ where: {id } });
        return userDeleted;
    }
}