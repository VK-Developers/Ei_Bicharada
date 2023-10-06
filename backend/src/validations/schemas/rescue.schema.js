const Joi = require('joi');

module.exports = {
    create: Joi.object({
        animal: Joi.string().required(),
        walking: Joi.bool().required(),
        description: Joi.string().required(),
        hour: Joi.string().required(),
        adress: Joi.string().required(),
        city: Joi.string().required(),
        picture: Joi.string().required(),
        status: Joi.number().required()
    }),
}