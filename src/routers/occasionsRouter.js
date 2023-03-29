const express = require("express");
const router = express.Router();
const occasionsController = require("../controllers/occasionsController");

router
  .route("/")
  .get(occasionsController.getAllOccasions)
  .post(occasionsController.createOccasion)
  .patch(occasionsController.updateOccasion)
  .delete(occasionsController.deleteOccasion);

module.exports = router;
