const { Router } = require("express");
const commentController = require("../controllers/comments.controller");

const router = Router();

router.get("/", commentController.getAllComments);

router.get("/lecture/:lectureId", commentController.getCommentsByLectureId);

router.get("/:commentId", commentController.getCommentById);

router.get("/user/:userId", commentController.getCommentsByUserId);

router.post("/", commentController.createComment);

router.put("/:commentId", commentController.updateCommentById);

router.delete("/:commentId", commentController.deleteCommentById);

module.exports = router;
