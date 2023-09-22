const mongoose = require("mongoose");

module.exports = mongoose.model(
  "car",

  new mongoose.Schema(
    {
      model: String,
      reg: String,
      color: String,
      name: String,
      pin: String,
      image: String
    },
    { timestamps: true }
  )
);
