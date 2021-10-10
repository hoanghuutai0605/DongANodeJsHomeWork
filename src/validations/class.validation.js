const { HttpStatusCode } = require('../utils/constants');
const Joi = require('joi');

const createNewClass = async (req, res, next) => {
    const condition = Joi.object({
        name: Joi.string().min(1).max(50).required(),
        numberStudent: Joi.number().max(255).required()
    });
    try {
        await condition.validateAsync(req.body, { abortEarly: false });
        console.log("pass validation");
        next();
    } catch (error) {
        res.status(HttpStatusCode.BAD_REQUEST).json({
            errors: new Error(error).message
        });
    }
}

const updateClass = async (req, res, next) => {
    const condition = Joi.object({
        _id: Joi.string().min(5).required(),
        name: Joi.string().min(1).max(50).required(),
        numberStudent: Joi.number().max(255).required()
    });
    try {
        await condition.validateAsync(req.body, { abortEarly: false });
        next();
    } catch (error) {
        res.status(HttpStatusCode.BAD_REQUEST).json({
            errors: new Error(error).message
        });
    }
}

module.exports = {
    createNewClass,
    updateClass
};
