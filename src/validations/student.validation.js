const { HttpStatusCode } = require('../utils/constants');
const Joi = require('joi');

const createNewStudent = async (req, res, next) => {
    const condition = Joi.object({
        name: Joi.string().min(1).max(50).required(),
        address: Joi.string().min(0).max(255),
        born: Joi.string().min(0).required()
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

const updateStudent = async (req, res, next) => {
    const condition = Joi.object({
        _id: Joi.string().min(5).required(),
        name: Joi.string().min(1).max(50).required(),
        address: Joi.string().min(0).max(255),
        born: Joi.string().min(0).required()
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
    createNewStudent,
    updateStudent
};
