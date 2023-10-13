const Joi = require('joi');

module.exports = {
    create: Joi.object({
        name: Joi.string().required(),
        email: Joi.string().email().required(),
        phone: Joi.string().pattern(/^[+]\d{2} \d{2} \d{5}-\d{4}$/).required(), // +55 13 9999-9999
        city: Joi.string().required(),
        cep: Joi.string().pattern(/^\d{5}-\d{3}$/).required(), // 00000-000
    }),
}