// const { AuthService } = require('../services/auth.service');
const { HttpStatusCode } = require('../utils/constants');
const { ClassServices } = require('../services/class.service');

const getAllClass = async (req, res) => {
    try {
        const allClass = await ClassServices.getAllClass(req.body);
        res.status(HttpStatusCode.OK).json(allClass);
    } catch (error) {
        res.status(HttpStatusCode.BAD_REQUEST).json({
            errors: error.message
        })
    }
}

const getClassById = async (req, res) => {
    const classId = req.params.classId;
    try {
        const Class = await ClassServices.getClassById(classId);
        res.status(HttpStatusCode.OK).json(Class);
    } catch (error) {
        res.status(HttpStatusCode.BAD_REQUEST).json({
            errors: error.message
        })
    }
}

const createNewClass = async (req, res) => {
    try {
        const newClass = await ClassServices.createNewClass(req.body);
        res.status(HttpStatusCode.OK).json(newClass)
    } catch (error) {
        res.status(HttpStatusCode.BAD_REQUEST).json({
            errors: error.message
        })
    }
}

const updateClass = async (req, res) => {
    try {
        const updatedClass = await ClassServices.updateClass(req.body);
        res.status(HttpStatusCode.OK).json({
            updatedClass: updatedClass
        })
    } catch (error) {
        res.status(HttpStatusCode.BAD_REQUEST).json({
            errors: error.message
        })
    }
}

const deleteClassById = async (req, res) => {
    const objectId = req.params.classId;
    try {
        const deletedClass = await ClassServices.deleteClassById(objectId);
        res.status(HttpStatusCode.OK).json({
            deletedClass: deletedClass
        })
    } catch (error) {
        res.status(HttpStatusCode.BAD_REQUEST).json({
            errors: error.message
        })
    }
}

module.exports.ClassController = { 
    createNewClass, 
    getAllClass, 
    updateClass,
    deleteClassById,
    getClassById
}