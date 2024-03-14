const express = require("express");
const { signup, signin, signout, profile } = require("../controllers/user.controllers");
const auth = require("../middlewares/auth.middleware");
const router = express.Router();

router.post("/signup", signup);
router.post("/signin", signin);
router.get("/signout", signout);
router.get('/profile', auth, profile); 

module.exports = router;
