const Joi = require('joi');

module.exports = {
    create: Joi.object({
        name: Joi.string().required(),
        walking: Joi.bool().required(),
        description: Joi.string().required(),
        hour: Joi.string().required(),
        adress: Joi.string().required(),
        neighborhood: Joi.string().required(),
        picture: Joi.string().required(),
    }),
}