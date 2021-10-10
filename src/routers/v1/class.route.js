
const express = require('express');
const router = express.Router();
const ClassValidations = require('../../validations/class.validation');
const { ClassController } = require('../../controllers/class.controller');
 
router.route('/')
  .get(ClassController.getAllClass)
  .post(ClassValidations.createNewClass, ClassController.createNewClass)
  .patch(ClassValidations.updateClass, ClassController.updateClass);

router.route('/:ClassId')
  .get(ClassController.getClassById)
  .delete(ClassController.deleteClassById);

module.exports.classRoutes = router;