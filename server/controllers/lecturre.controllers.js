const Lecture = require("../models/lecture.model");

exports.createLecture = async (req, res) => {
  try {
    const { title, description, videoUrl, course } = req.body;
    const lecture = new Lecture({
      title,
      description,
      videoUrl,
      course
    });
    await lecture.save();
    res.status(201).json({ message: "Lecture created successfully", lecture });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

exports.getAllLectures = async (req, res) => {
  try {
    const lectures = await Lecture.find();
    res.status(200).json({ lectures });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

exports.getLectureById = async (req, res) => {
  try {
    const lecture = await Lecture.findById(req.params.lectureId);
    if (!lecture) {
      return res.status(404).json({ error: "Lecture not found" });
    }
    res.status(200).json({ lecture });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

exports.updateLectureById = async (req, res) => {
  try {
    const { title, description, videoUrl, course } = req.body;
    const lecture = await Lecture.findByIdAndUpdate(
      req.params.lectureId,
      { title, description, videoUrl, course },
      { new: true }
    );
    if (!lecture) {
      return res.status(404).json({ error: "Lecture not found" });
    }
    res.status(200).json({ message: "Lecture updated successfully", lecture });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

exports.deleteLectureById = async (req, res) => {
  try {
    const lecture = await Lecture.findByIdAndDelete(req.params.lectureId);
    if (!lecture) {
      return res.status(404).json({ error: "Lecture not found" });
    }
    res.status(200).json({ message: "Lecture deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};
