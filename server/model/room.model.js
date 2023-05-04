const mongoose = require("mongoose");

const roomSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  hotel: {
    type: String,
  },
  price: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  geusts: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Room", roomSchema);
