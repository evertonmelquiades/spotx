const Joi = require("@hapi/joi");

const cadastro  = Joi.object({

    name: Joi.string()
        .min(3)
        .max(20)
        .pattern(/^[a-zA-Z\s.]{2,80}$/)
        .required(),

    nick: Joi.string()
        .min(3)
        .max(20)
        .pattern(/^[a-zA-Z\s.]{2,80}$/)
        .required(),
    
    password: Joi.string()
        .min(8)
        .max(20)
        .pattern(/^[a-zA-Z0-9?!@#$%"&*()_-]{8,20}$/),

    userLogin: Joi.string()
        .min(3)
        .max(20)
        .required()
        .pattern(/^[a-zA-Z0-9?!@#$%"&*()_-]{8,20}$/),
    
    number: Joi.string()
        .min(8)
        .max(9),
});

module.exports = cadastro;