const mongoose = require("mongoose")

const bungerSchema = new mongoose.Schema({
  bunger: {
    img: {
      required: [true, "please provide a img"],
      Type: String,
      unique: true,
    },
    Reputation: {
      Type: String,
      default: '0'
    },
    createdBy: {
      type: mongoose.Types.ObjectId,
      ref: "User",
      required: true,
    },
    required: [true, "please provide a img"],
  }, timestamps: true
});


module.exports = mongoose.model("bunger", bungerSchema);