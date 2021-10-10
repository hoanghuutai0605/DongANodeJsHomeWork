// const { AuthService } = require('../services/auth.service');
const { HttpStatusCode } = require('../utils/constants');
const { StudentServices } = require('../services/student.service');

const getAllStudent = async (req, res) => {
    try {
        const allStudent = await StudentServices.getAllStudent(req.body);
        res.status(HttpStatusCode.OK).json(allStudent);
    } catch (error) {
        res.status(HttpStatusCode.BAD_REQUEST).json({
            errors: error.message
        })
    }
}

const getStudentById = async (req, res) => {
    const studentId = req.params.studentId;
    try {
        const student = await StudentServices.getStudentById(studentId);
        res.status(HttpStatusCode.OK).json(student);
    } catch (error) {
        res.status(HttpStatusCode.BAD_REQUEST).json({
            errors: error.message
        })
    }
}

const createNewStudent = async (req, res) => {
    try {
        const newStudent = await StudentServices.createNewStudent(req.body);
        res.status(HttpStatusCode.OK).json(newStudent)
    } catch (error) {
        res.status(HttpStatusCode.BAD_REQUEST).json({
            errors: error.message
        })
    }
}

const updateStudent = async (req, res) => {
    try {
        const updatedStudent = await StudentServices.updateStudent(req.body);
        res.status(HttpStatusCode.OK).json({
            updatedStudent: updatedStudent
        })
    } catch (error) {
        res.status(HttpStatusCode.BAD_REQUEST).json({
            errors: error.message
        })
    }
}

const deleteStudentById = async (req, res) => {
    const objectId = req.params.studentId;
    try {
        const deletedStudent = await StudentServices.deleteStudentById(objectId);
        res.status(HttpStatusCode.OK).json({
            deletedStudent: deletedStudent
        })
    } catch (error) {
        res.status(HttpStatusCode.BAD_REQUEST).json({
            errors: error.message
        })
    }
}

module.exports.StudentController = { 
    createNewStudent, 
    getAllStudent, 
    updateStudent,
    deleteStudentById,
    getStudentById
}