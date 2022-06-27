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


module.exports = {
    loginSchema,
}