const mongoose = require("mongoose");

const BungerSchema = new mongoose.Schema(
  {
    img: {
      type: String,
      //unique: true,
    },
    title: {
      //required: [true, "you bingus, name the baby"],
      type: String,
    },
    reputation: {
      type: String,
      default: 0,
    },
    createdBy: {
      type: mongoose.Types.ObjectId,
      ref: "User",
      required: true,
    },
    //required: [true, "oh my GOD add everything!!"],
  },
  { timeStamp: true }
);

module.exports = mongoose.model("Bunger", BungerSchema);
