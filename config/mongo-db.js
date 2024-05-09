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

// Define schema
const breakfastSchema = new mongoose.Schema({
  eggs: {
    type: Number,
    min: [6, "Too few eggs"],
    max: 12,
    required: [true, "Why no eggs?"],
  },
  drink: {
    type: String,
    enum: ["Coffee", "Tea", "Water"],
  },
});

// Compile model from schema
const someModel = new mongoose.model("SomeModel", breakfastSchema);