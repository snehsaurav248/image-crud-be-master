const express = require("express");
const router = express.Router();
const updatePicture = require("../controllers/updateController");

router.put("/", updatePicture);

module.exports = router;
