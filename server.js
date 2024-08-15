const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const uploadRoute = require("./routes/uploadRoute");
const updateRoute = require("./routes/updateRoute");
const fetchRoute = require("./routes/fetchRoute");
const deleteRoute = require("./routes/deleteRoute");

const app = express();
const PORT = 9999;

// Connect to mongodb
mongoose
  .connect(
    "mongodb+srv://harsh71924:RmAZT6DUXK1tnlH8@cluster0.4allydq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => console.error("Error in connecting to MongoDB", err));

// Middleware
app.use(cors());
app.use(express.json());

// Routes
// upload, update, delete, fetch

// /upload, /update/, /delete, /fetch

app.use("/upload", uploadRoute);
app.use("/update", updateRoute);
app.use("/fetch", fetchRoute);
app.use("/delete", deleteRoute);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
