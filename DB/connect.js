const mongoose = require("mongoose")

const connectDB = (url) => {
  return mongoose
    .connect(url)
    .then(() => console.log("connected to DB...!"))
    .catch((err) => console.log(err));
};


module.exports = connectDB;