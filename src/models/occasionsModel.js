const mongoose = require("mongoose");

const occasionsSchema = mongoose.Schema({
  title: {
    type: String,
    minlength: [1, "title cannot be empty"],
    maxlength: [100, "oops, title is too long"],
    required: true,
    cast: false,
  },
  isEveryday: {
    type: Boolean,
    default: false,
  },
});

const Occasion = new mongoose.model("Occasion", occasionsSchema);

module.exports = Occasion;
