const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const cors = require("cors");
const multer = require("multer");
require("dotenv").config();
const Room = require("./model/room.model");

const app = express();

// images upload config
const fileStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "images/");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const fileFilter = (req, file, cb) => {
  if (
    file.mimetype === "image/png" ||
    file.mimetype === "image/jpg" ||
    file.mimetype === "image/jpeg" ||
    file.mimetype === "image/avif"
  ) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

const corsConfig = {
  origin: true,
  credentials: true,
};

// middlewares
app.use(cors(corsConfig));
app.options("*", cors(corsConfig));
app.use(express.json());
app.use(
  multer({ storage: fileStorage, fileFilter: fileFilter }).single("image")
);
app.use("/images", express.static(path.join(__dirname, "images")));
app.use(require("./routes/authRoutes.js"));
app.get("/rooms", (req, res) => {
  Room.find().then((rooms) => {
    if (!rooms) return res.json({ message: "No book where found!" });
    return res.json({ rooms });
  });
});
app.post("/add-room", (req, res) => {
  const { title, hotel, location, geusts, price, description } = req.body;
  const image = req.file.path;
  const room = new Room({
    title,
    hotel,
    location,
    geusts,
    price,
    description,
    image,
  });
  room
    .save()
    .then((result) => {
      res.status(201).json({ message: "Room added succesfully" });
    })
    .catch((err) => {
      console.log(err);
    });
});

mongoose
  .connect(
    `mongodb+srv://yassinbagane2:${process.env.PWD}@cluster0.qollkp9.mongodb.net/harmony`
  )
  .then(() => {
    app.listen(8000);
    console.log("Connected to db");
  })
  .catch((err) => {
    console.log(err);
  });
