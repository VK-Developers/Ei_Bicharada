const models = require('../database/models');

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
    create: async(obj) => {
        const newUser = await models.user.create(obj);
        return newUser
    },
    destroy: async(id) => {
        const userDeleted = await models.user.destroy({ where: {id } });
        return userDeleted;
    }
}