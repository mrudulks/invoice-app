const Joi = require('joi');

const loginSchema = Joi.object({
    email: Joi.string().email({
        minDomainSegments:2
    }).required(),
    password: Joi.string()
    .min(6)
    .max(12)
    .required()
})

const registerUserSchema = Joi.object({
    email: Joi.string().email({
        minDomainSegments:2
    }).required(),
    password: Joi.string()
    .min(6)
    .max(12)
    .required(),
    name: Joi.string()
    .required(),
    role: Joi.string()
    .required()
        

})

module.exports = {
    loginSchema,
    registerUserSchema
}