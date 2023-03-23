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
    const newOccasion = await Occasion.create(req.body);
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

module.exports = {
  getAllOccasions,
  createOccasion,
};
