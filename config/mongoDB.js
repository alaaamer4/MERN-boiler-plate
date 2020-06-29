const mongoose = require("mongoose");
const config = require("config");
const connect = config.get("mongoURI");

// connect to DB
const connectDB = async () => {
  try {
    await mongoose.connect(connect, {
      useFindAndModify: false,
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
    });
    console.log("connected to DB successfully");
  } catch (error) {
    console.log(error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
