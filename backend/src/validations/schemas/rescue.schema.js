const Joi = require('joi');

module.exports = {
    create: Joi.object({
        animal: Joi.string().min(3).required(),
        walking: Joi.bool().required(),
        description: Joi.string().min(8).required(),
        hour: Joi.string().regex(/^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/), // 00:00
        adress: Joi.string().min(8).required(),
        city: Joi.string().min(4).required(),
        picture: Joi.string().required(),
        status: Joi.number().valid(0, 1).required()
    }),
}