const models = require('../database/models');

module.exports = {
    getAll: async () => {
        const recuedAnimals = await models.rescue.findAll({
            attributes: {exclude: ['createdAt', 'updatedAt']}
        });
        return recuedAnimals;
    },
    // add: async (content) => {
    //     const model = await models.users.create(content);
    //     const newUser = model.toJSON();
    //     const { createdAt, updatedAt, ...user } = newUser;
    //     return user;
    // }
}