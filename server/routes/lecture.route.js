const { Router } = require("express");
const { createLecture, getAllLectures, getLectureById, updateLectureById, deleteLectureById } = require("../controllers/lecturre.controllers");

const router = Router();

router.post("/", createLecture);

router.get("/", getAllLectures);

router.get("/:lectureId", getLectureById);

router.put("/:lectureId", updateLectureById);

router.delete("/:lectureId", deleteLectureById);

module.exports = router;
