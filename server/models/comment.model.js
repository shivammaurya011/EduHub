const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
  content: {
    type: String,
    required: [true, 'Content is required'],
    minlength: [2, 'Content must be at least 2 characters long'],
    maxlength: [500, 'Content cannot exceed 500 characters']
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  lecture: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Lecture',
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const Comment = mongoose.model('Comment', commentSchema);

module.exports = Comment;
