const Joi = require('joi');

module.exports = {
    create: Joi.object({
        animal: Joi.string().min(3).required(),
        name: Joi.string().min(3).required(),
        description: Joi.string().min(6).required(),
        neutered: Joi.bool().required(),
        sex: Joi.bool().required(),
        user: Joi.string(),
        region: Joi.string(),
        picture: Joi.string().required(),
        accepted: Joi.bool(),
        newRequest: Joi.bool(),
    }),
}