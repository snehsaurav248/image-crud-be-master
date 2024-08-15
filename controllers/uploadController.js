// take image from local
// store that image memory storage
// take this image and upload it on cloudinary -> you will receive a cloudinary link
// use this cloudinary link , put it in schema and upload it to database

const fs = require("fs");
const os = require("os");
const path = require("path");
const multer = require("multer");
const cloudinary = require("../cloudinaryConfig");
const Picture = require("../models/picture");

// set up multer storage
const multerStorage = multer.memoryStorage();

// initialise multer upload
const upload = multer({ storage: multerStorage });

const uploadPicture = (req, res) => {
  upload.single("pic")(req, res, async (err) => {
    // create a temporary file from buffer
    const tempFilePath = path.join(
      os.tmpdir(),
      `${Date.now() - req.file.originalname}`
    );
    fs.writeFileSync(tempFilePath, req.file.buffer);

    // upload image to cloudinary
    const result = await cloudinary.uploader.upload(tempFilePath);

    // remove the temporary file
    fs.unlinkSync(tempFilePath);

    // save information to the database
    const uploadNewPicture = new Picture({
      userId: "1a",
      fileName: req.file.originalname,
      path: result.secure_url, // cloudinary url path
      cloudinaryPublicId: result.public_id, // cloudinary id
    });

    await uploadNewPicture.save();

    res
      .status(200)
      .json({ message: "Image uploaded successfully", uploadNewPicture });
  });
};

module.exports = uploadPicture;
