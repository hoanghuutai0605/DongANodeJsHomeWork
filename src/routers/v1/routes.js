const express = require('express');
const router = express.Router();
const { classRoutes } = require('./class.route');
const { studentRoutes } = require('./student.route');

router.use('/student', studentRoutes);
router.use('/class', classRoutes);

module.exports.ApiV1 = router;