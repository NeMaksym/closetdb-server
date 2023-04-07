const mongoose = require('mongoose');

const occasionsSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
    cast: false,
    minlength: [1, 'Title must have at least one character'],
    maxlength: [50, 'Title cannot be longer than 50 characters'],
  },
  isEveryDay: {
    type: Boolean,
    default: false,
  },
});

const Occasion = new mongoose.model('Occasion', occasionsSchema);

module.exports = Occasion;
