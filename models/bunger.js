const mongoose = require("mongoose")

const bungerSchema = new mongoose.Schema(
  {
  bunger:{
    img: { 
      Type: String, 
      //unique: true,
    },
    title:{
        //required: [true, "you bingus, name the baby"],
        Type: String,
    },
    reputation: {
      Type: String,
      default: 0
    },
    createdBy: {
      type: mongoose.Types.ObjectId,
      ref: "User",
      required: true,
    },
    //required: [true, "oh my GOD add everything!!"], 
  }, }, {timeStamp: true });


module.exports = mongoose.model("bunger", bungerSchema);