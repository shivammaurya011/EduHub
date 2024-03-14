const Course = require("../models/course.model");

exports.getAllCourses = async (req, res) => {
  try {
    const courses = await Course.find();
    res.status(200).json({ courses });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

exports.getCourseById = async (req, res) => {
  try {
    const course = await Course.findById(req.params.courseId);
    if (!course) {
      return res.status(404).json({ error: "Course not found" });
    }
    res.status(200).json({ course });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

exports.createCourse = async (req, res) => {
  try {
    const { title, description, instructor, image, price, startDate, category } = req.body;
    const course = new Course({
      title,
      description,
      instructor,
      image,
      price,
      startDate,
      category
    });
    await course.save();
    res.status(201).json({ message: "Course created successfully", course });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

exports.updateCourseById = async (req, res) => {
  try {
    const { title, description, instructor, image, price, startDate, category } = req.body;
    const course = await Course.findByIdAndUpdate(
      req.params.courseId,
      { title, description, instructor, image, price, startDate, category },
      { new: true }
    );
    if (!course) {
      return res.status(404).json({ error: "Course not found" });
    }
    res.status(200).json({ message: "Course updated successfully", course });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

exports.deleteCourseById = async (req, res) => {
  try {
    const course = await Course.findByIdAndDelete(req.params.courseId);
    if (!course) {
      return res.status(404).json({ error: "Course not found" });
    }
    res.status(200).json({ message: "Course deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};
