const models = require('../database/models');

module.exports = {
    getAll: async () => {
        const rescue = await models.rescue.findAll({
            attributes: {exclude: ['created']}
        });
        return rescue;
    },
    getById: async (id) => {
        const rescue = await models.rescue.findByPk(id, {include: {model: models.user, as: 'user'}});
        return rescue;
    },
    update: async(obj, id) => {
        const [updatedRescue] = await models.rescue.update(obj, { where: { id } });
        return updatedRescue;
    },
    create: async(obj) => {
        const newRescue = await models.rescue.create(obj);
        return newRescue
    },
    destroy: async(id) => {
        const rescueDeleted = await models.rescue.destroy({ where: {id } });
        return rescueDeleted;
    }
}