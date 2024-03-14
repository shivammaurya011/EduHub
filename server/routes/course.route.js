const express = require("express");
const { getAllCourses, getCourseById, createCourse, updateCourseById, deleteCourseById } = require('../controllers/course.controller');
const router = express.Router()

router.get('/', getAllCourses);

router.get('/:courseId', getCourseById);

router.post('/', createCourse);

router.patch('/:courseId', updateCourseById);

router.delete('/:courseId', deleteCourseById);

module.exports = router;
