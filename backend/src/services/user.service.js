const models = require('../database/models');
const { user: validation } = require('../validations')

module.exports = {
    getAll: async () => {
        const users = await models.user.findAll({
            attributes: {exclude: ['created']}
        });
        return users;
    },
    getById: async (id) => {
        const user = await models.user.findByPk(id);

        // console.log('aqui')
        // const test = await models.user.getRescues()
        // console.log(test)

        return user;
    },
    update: async(obj, id) => {
        const [updatedUser] = await models.user.update(obj, { where: { id } });
        return updatedUser;
    },
    create: async (data, password) => {
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
        
        return {status: 203, msg: 'usuario ja existe'};
    },
    destroy: async(id) => {
        const userDeleted = await models.user.destroy({ where: {id } });
        return userDeleted;
    }
}