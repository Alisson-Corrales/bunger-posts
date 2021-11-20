const mongoose = require('mongoose')
const bcrypt = require("bcrypt")
const jwt = require('jsonwebtoken')

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "please provide a name"],
    minlength: 3,
    maxlength: 50
  },
  email: {
    type: String,
    required: [true, "please provide a email"],
    unique: true,
    lowercase: true,
    match: [/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g, "must provide a valid email"]
  },
  password: {
    type: String,
    required: [true, "please provide a password"],
    minlength: 6
  },
});

userSchema.pre("save", async function (next) {
  this.password = await bcrypt.hash(this.password, await bcrypt.genSalt(10));
  next();
});
userSchema.methods.createJWT = function () {
  return jwt.sign(
    { userID: this._id, name: this.name },
    process.env.JWT_SIGNATURE,
    {
      expiresIn: "30d"
    }
  )
}
userSchema.methods.comparePassword = async function (submittedPass) {
  const isMatch = await bcrypt.compare(submittedPass, this.password);
  return isMatch;
};



module.exports = mongoose.model("User", userSchema);

