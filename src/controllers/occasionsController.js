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
    const {title} = req.body.title
    const newOccasion = await Occasion.create({title});
    res.status(201).json({
      status: "success",
      data: {
        newOccasion,
      },
    });
    } catch (err) {
      res.status(400).json({
        status: "error",
      })
  }
}

module.exports = {
  getAllOccasions,
  createOccasion,
};
