const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Title is required'],
    minlength: [5, 'Title must be at least 5 characters long'],
    maxlength: [100, 'Title cannot exceed 100 characters']
  },
  description: {
    type: String,
    required: [true, 'Description is required'],
    minlength: [10, 'Description must be at least 10 characters long'],
    maxlength: [500, 'Description cannot exceed 500 characters']
  },
  instructor: {
    type: String,
    required: [true, 'Instructor is required'],
    minlength: [2, 'Instructor name must be at least 2 characters long'],
    maxlength: [50, 'Instructor name cannot exceed 50 characters']
  },
  image: {
    type: String
  },
  price: {
    type: Number,
    required: [true, 'Price is required']
  },
  startDate: {
    type: Date,
    required: [true, 'Start date is required']
  },
  category: {
    type: String,
    required: [true, 'Category is required']
  }
});

const Course = mongoose.model("Course", courseSchema);

module.exports = Course;
