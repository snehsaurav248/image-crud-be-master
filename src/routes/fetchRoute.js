const express = require("express");
const router = express.Router();
const {
  fetchAllPictures,
  fetchPictureById,
} = require("../controllers/fetchController");

router.get("/", fetchAllPictures);
router.get("/:id", fetchPictureById);

module.exports = router;
