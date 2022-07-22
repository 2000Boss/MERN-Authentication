const express = require("express");
const uploadController = require("../controllers/mediaController");
const authController = require("./../controllers/authController");
const router = express.Router();

router.route("/upload").get(uploadController.media_upload);

module.exports = router;
