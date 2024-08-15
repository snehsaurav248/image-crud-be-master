const express = require("express");
const router = express.Router();
const uploadPicture = require("../controllers/uploadController");

router.post("/", uploadPicture);

module.exports = router;
