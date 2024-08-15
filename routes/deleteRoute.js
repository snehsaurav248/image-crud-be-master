const express = require("express");
const router = express.Router();
const deletePicture = require("../controllers/deleteController");

router.delete("/:id", deletePicture);

module.exports = router;
