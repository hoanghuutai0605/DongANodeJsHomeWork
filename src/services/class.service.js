
const Class = require('../models/class.model');

const getAllClass = async () => {
    try {
        console.log("In Service")
        const allClass = await Class.getAllClass();
        return allClass;
    } catch (error) {
        throw new Error(error);
    }
}

const getClassById = async (id) => {
    try {
        const student = await Class.getClassById(id);
        return student;
    } catch (error) {
        throw new Error(error);
    }
}

const createNewClass = async (data) => {
    try {
        const newClass = await Class.createNewClass(data);
        return newClass;
    } catch (error) {
        throw new Error(error);
    }
}

const updateClass = async (data) => {
    try {
        const updatedClass = await Class.updateClass(data);
        return updatedClass;
    } catch (error) {
        throw new Error(error);
    }
}

const deleteClassById = async (id) => {
    try {
        const deletedClass = await Class.deleteClassById(id);
        return deletedClass;
    } catch (error) {
        throw new Error(error);
    }
}

module.exports.ClassServices = { 
    createNewClass, 
    getAllClass, 
    updateClass, 
    deleteClassById,
    getClassById
}