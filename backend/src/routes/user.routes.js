const express = require("express");
const { signup, login, getSettings, updateSettings } = require("../controllers/user.controller");
const auth = require("../middlewares/auth.middleware");
const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);

// Settings
router.get("/settings", auth, getSettings);
router.put("/settings", auth, updateSettings);

module.exports = router;
