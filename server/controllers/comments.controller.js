const Comment = require("../models/comment.model");

// Controller function to get all comments
exports.getAllComments = async (req, res) => {
  try {
    const comments = await Comment.find();
    res.status(200).json({ comments });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

// Controller function to get comments on a particular lecture
exports.getCommentsByLectureId = async (req, res) => {
  try {
    const { lectureId } = req.params;
    const comments = await Comment.find({ lecture: lectureId });
    res.status(200).json({ comments });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

// Controller function to get a single comment by its ID
exports.getCommentById = async (req, res) => {
  try {
    const comment = await Comment.findById(req.params.commentId);
    if (!comment) {
      return res.status(404).json({ error: "Comment not found" });
    }
    res.status(200).json({ comment });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

// Controller function to get all comments by one user
exports.getCommentsByUserId = async (req, res) => {
  try {
    const { userId } = req.params;
    const comments = await Comment.find({ user: userId });
    res.status(200).json({ comments });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

// Controller function to create a new comment
exports.createComment = async (req, res) => {
  try {
    const { content, user, lecture } = req.body;
    const comment = new Comment({
      content,
      user,
      lecture
    });
    await comment.save();
    res.status(201).json({ message: "Comment created successfully", comment });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

// Controller function to update a comment by its ID
exports.updateCommentById = async (req, res) => {
  try {
    const { content } = req.body;
    const comment = await Comment.findByIdAndUpdate(
      req.params.commentId,
      { content },
      { new: true }
    );
    if (!comment) {
      return res.status(404).json({ error: "Comment not found" });
    }
    res.status(200).json({ message: "Comment updated successfully", comment });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

// Controller function to delete a comment by its ID
exports.deleteCommentById = async (req, res) => {
  try {
    const comment = await Comment.findByIdAndDelete(req.params.commentId);
    if (!comment) {
      return res.status(404).json({ error: "Comment not found" });
    }
    res.status(200).json({ message: "Comment deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};
