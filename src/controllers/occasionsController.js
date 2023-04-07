const Occasion = require('../models/occasionsModel');

async function getAllOccasions(req, res) {
  try {
    const occasions = await Occasion.find();

    res.status(200).json({
      status: 'success',
      data: {
        occasions,
      },
    });
  } catch (err) {
    return res.status(400).json({
      status: 'error',
      message: err.message,
    });
  }
}

async function createOccasion(req, res) {
  try {
    const { title } = req.body;
    const newOccasion = await Occasion.create({ title });

    res.status(201).json({
      status: 'success',
      data: {
        newOccasion,
      },
    });
  } catch (err) {
    return res.status(400).json({
      status: 'error',
      message: err.message,
    });
  }
}

async function updateOccasion(req, res, next) {
  try {
    if (!req.body.title) throw new Error('Please provide a title to update');

    const doc = await Occasion.findByIdAndUpdate(req.body.id, req.body.title, {
      new: true,
      runValidators: true,
    });

    if (!doc) throw new Error('No document with a specified Id');

    res.status(200).json({
      status: 'success',
      data: {
        doc,
      },
    });
  } catch (err) {
    return res.status(400).json({
      status: 'error',
      message: err.message,
    });
  }
}

async function deleteOccasion(req, res, next) {
  try {
    const doc = await Occasion.findByIdAndDelete(req.body.id);

    if (!doc) throw new Error('No document with a specified Id');

    res.status(200).json({
      status: 'success',
    });
  } catch (err) {
    return res.status(400).json({
      status: 'error',
      message: err.message,
    });
  }
}

module.exports = {
  getAllOccasions,
  createOccasion,
  updateOccasion,
  deleteOccasion,
};
