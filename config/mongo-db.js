const mongoose = require("mongoose");

mongoose.set("strictQuery", false);

const mongoDB =
  "mongodb+srv://haguhagu0522:qlalfqjsgh1@test.ollr9dq.mongodb.net/";

exports.mongoDB = async () => {
  try {
    await mongoose.connect(mongoDB);
    console.log("Connected");
  } catch (err) {
    console.log("MongoDB connection failed", err);
  }
};