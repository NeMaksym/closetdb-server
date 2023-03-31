const Occasion = require("../models/occasionsModel");

async function getAllOccasions(req, res, next) {
  try {
    const occasions = await Occasion.find();

    res.status(200).json({
      status: "success",
      data: {
        occasions,
      },
    });
  } catch (err) {
    console.log(err);
  }
}

async function createOccasion(req, res, next) {
  try {
    const newOccasion = await Occasion.create(req.body.title);
    res.status(201).json({
      status: "success",
      data: {
        newOccasion,
      },
    });
    next();
  } catch (err) {
    console.log(err);
  }
}

async function updateOccasion(req, res, next) {
  try {
    const notAllowedParams = "isEveryday";

    if (req.body.hasOwnProperty(notAllowedParams)) throw Error;

    const doc = await Occasion.findByIdAndUpdate(req.body._id, req.body, {
      new: true,
      runValidators: true,
    });

    res.status(200).json({
      status: "success",
      data: {
        doc,
      },
    });
  } catch (err) {
    return res.status(400).json({
      status: "error",
      message: "This field cannot be changed",
    });
  }
}

module.exports = {
  getAllOccasions,
  createOccasion,
  updateOccasion,
};
