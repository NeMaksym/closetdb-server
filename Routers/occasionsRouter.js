const express = require("express");
const router = express.Router();
const occasionsController = require("../Controllers/occasionsController");

router
  .route("/")
  .get(occasionsController.getAllOccasions)
  .post(occasionsController.createOccasion);

module.exports = router;
