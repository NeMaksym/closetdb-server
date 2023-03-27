const mongoose = require("mongoose");

const occasionsSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  isEveryday: {
    type: Boolean,
    default: false,
  },
});

const Occasion = new mongoose.model("Occasion", occasionsSchema);

module.exports = Occasion;
