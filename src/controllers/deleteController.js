const Picture = require("../models/picture");
const cloudinary = require("../cloudinaryConfig");

// 1. find picture in cloudinary by public_id
// 2. delete it from cloudinary
// 3. find picture in database by id
// 4. delete it from database

const deletePicture = async (req, res) => {
  const { id } = req.params;

  // find picture from database by id
  const picture = await Picture.findById(id);

  // find picture in cloudinary by public_id, delete it from cloudinary
  cloudinary.uploader.destroy(picture.cloudinaryPublicId);

  // delete picture from database
  await Picture.findByIdAndDelete(id);

  res.status(200).json({ message: "Picture deleted successfully" });
};

module.exports = deletePicture;
