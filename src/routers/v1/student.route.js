
const express = require('express');
const router = express.Router();
const StudentValidations = require('../../validations/student.validation');
const { StudentController } = require('../../controllers/student.controller');
 
router.route('/')
  .get(StudentController.getAllStudent)
  .post(StudentValidations.createNewStudent, StudentController.createNewStudent)
  .patch(StudentValidations.updateStudent, StudentController.updateStudent);

router.route('/:studentId')
  .get(StudentController.getStudentById)
  .delete(StudentController.deleteStudentById);

module.exports.studentRoutes = router;