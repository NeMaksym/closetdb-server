const Occasion = require('../models/occasionsModel');

async function getAllOccasions(req, res, next) {
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

async function createOccasion(req, res, next) {
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
    const notAllowedParams = 'isEveryday';

    if (req.body.hasOwnProperty(notAllowedParams)) throw Error;

    const doc = await Occasion.findByIdAndUpdate(req.body._id, req.body, {
      new: true,
      runValidators: true,
    });

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
    if (!req.body._id) throw Error;

    const doc = await Occasion.findByIdAndDelete(req.body._id);

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
