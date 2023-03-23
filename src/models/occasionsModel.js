const mongoose = require("mongoose");

const occasionsSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  isEveryDay: {
    type: Boolean,
    required: true,
  },
});

const Occasion = new mongoose.model("Occasion", occasionsSchema);

module.exports = Occasion;
