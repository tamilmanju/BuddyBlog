const mongoose = require("mongoose");
const dotenv = require("dotenv");
const app = require("./app");

dotenv.config({ path: "./config.env" });

//DB connection
mongoose
  .connect(process.env.DB_CONN_STR)
  .then(() => {
    console.log("DB Connected");
  })
  .catch((err) => {
    console.log(err);
  });

// Listening the port
const port = process.env.port || 4000;
app.listen(port, () => {
  console.log(`Server listening at port ${port}`);
});
