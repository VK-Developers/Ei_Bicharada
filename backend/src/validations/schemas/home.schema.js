const Joi = require('joi');

module.exports = {
    create: Joi.object({
        name: Joi.string().required(),
        phone: Joi.string().pattern(/^[+]\d{2} \d{2} \d{5}-\d{4}$/).required(),
        city: Joi.string().required(),
        type: Joi.string().required(),
        duration: Joi.string().required(),
    }),
}