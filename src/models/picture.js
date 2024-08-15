const mongoose = require("mongoose");

// create a new mongoose schema, and store it in a variable

// userId
// fileName
// path
// cloudinaryPublicId
// createdAt

// backend app -> cloudinary (CDN) -> url -> store url in database

const pictureSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },
  fileName: {
    type: String,
    required: true,
  },
  path: {
    type: String,
    required: true,
  },
  cloudinaryPublicId: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Picture = mongoose.model("Picture", pictureSchema);

module.exports = Picture;
