const Joi = require('joi');

module.exports = {
    create: Joi.object({
        email: Joi.string().email().required(),
        password: Joi.string().min(8).required(),
    }),
}