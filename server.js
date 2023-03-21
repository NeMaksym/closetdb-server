const dotenv = require("dotenv");
const mongoose = require("mongoose");
const app = require("./app");

dotenv.config({ path: ".env" });

const DB = process.env.DATABASE.replace(
  "<PASSWORD>",
  process.env.DATABASE_PASSWORD
);

mongoose.set("strictQuery", false);

mongoose.connect(DB).then(() => console.log("DB connections successful!"));

const port = 8000;

app.listen(port, () => {
  console.log(`app is running on port ${port}`);
});
