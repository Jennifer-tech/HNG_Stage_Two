const joi = require('joi')

const createSchema = joi.object().keys({
    name: joi.string().required(),
    email: joi.string().required().email(),
    language: joi.string(),
    country: joi.string()
})
const updateSchema = joi.object().keys({
    name: joi.string(),
    email: joi.string().email(),
    language: joi.string(),
    country: joi.string()
})

module.exports = { 
    createSchema,
    updateSchema
}
