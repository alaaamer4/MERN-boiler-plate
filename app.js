const express = require("express");
const app = express();
const connectDB = require("./config/mongoDB");
app.use("/", (req, res) => {
  res.send("hello there");
});
connectDB();
app.listen(5000, () => console.log("listening to port 5000"));
