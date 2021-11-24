const mongoose = require("mongoose");

const BungerSchema = new mongoose.Schema(
  {
    img: {
      type: String,
      required:[true, "oh my god the whole POINT is to add images"]
    },
    title: {
      type: String,
      required: [true, "you bingus, name the baby"],
    },
    reputation: {
      type: String,
      default: 0,
    },
    createdBy: {
      type: mongoose.Types.ObjectId,
      ref: "User",
      required: [true, "you are not safe from ruining your digital footprint"],
    },
    //required: [true, "oh my GOD add everything!!"],
  },
  { timeStamp: true }
);

module.exports = mongoose.model("Bunger", BungerSchema);
