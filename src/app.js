const express = require("express");
const app = express();
const occasionsRouter = require("./routers/occasionsRouter");

app.use(express.json());

app.use("/api/v1/occasions", occasionsRouter);

module.exports = app;
