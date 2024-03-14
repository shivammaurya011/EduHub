const mongoose = require("mongoose");

const lectureSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Title is required'],
    minlength: [2, 'Title must be at least 2 characters long'],
    maxlength: [100, 'Title cannot exceed 100 characters']
  },
  description: {
    type: String,
    required: [true, 'Description is required']
  },
  videoUrl: {
    type: String,
    required: [true, 'Video URL is required']
  },
  course: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Course',
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const Lecture = mongoose.model("Lecture", lectureSchema);

module.exports = Lecture;
