
const Student = require('../models/student.model');

const getAllStudent = async () => {
    try {
        const allStudent = await Student.getAllStudent();
        return allStudent;
    } catch (error) {
        throw new Error(error);
    }
}

const getStudentById = async (id) => {
    try {
        const student = await Student.getStudentById(id);
        return student;
    } catch (error) {
        throw new Error(error);
    }
}

const createNewStudent = async (data) => {
    try {
        const newStudent = await Student.createNewStudent(data);
        return newStudent;
    } catch (error) {
        throw new Error(error);
    }
}

const updateStudent = async (data) => {
    try {
        const updatedStudent = await Student.updateStudent(data);
        return updatedStudent;
    } catch (error) {
        throw new Error(error);
    }
}

const deleteStudentById = async (id) => {
    try {
        const deletedStudent = await Student.deleteStudentById(id);
        return deletedStudent;
    } catch (error) {
        throw new Error(error);
    }
}

module.exports.StudentServices = { 
    createNewStudent, 
    getAllStudent, 
    updateStudent, 
    deleteStudentById,
    getStudentById
}