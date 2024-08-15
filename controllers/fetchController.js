const Picture = require("../models/picture");

// 1. get all pictures
const fetchAllPictures = async (req, res) => {
  // fetch all the pictures from the database
  const pictures = await Picture.find();
  // send all the pictures from backend to frontend
  res.status(200).json(pictures);
};

const fetchPictureById = async (req, res) => {
  const { id } = req.params;
  // fetch picture with the provided id from the database
  const picture = await Picture.findById(id);
  // send the picture from backend to frontend
  res.status(200).json(picture);
};

module.exports = { fetchAllPictures, fetchPictureById };
