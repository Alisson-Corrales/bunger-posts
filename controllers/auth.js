//const mongoose = require("mongoose");
const User = require("../models/user");
const { StatusCodes } = require("http-status-codes");
const { BadRequestError, unAuthError} = require("../errors")
const bcrypt = require("bcrypt");

//register
const register = async (req, res) => {
  const newUser = await User.create(req.body);
  const token = newUser.createJWT();

  res
    .status(StatusCodes.CREATED)
    .json( { newUser } )
    .json({ user: { name: newUser.name, userID: newUser._id }, token })
    .send("you are registered, clown");
};

//login
const login = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    throw new BadRequestError("must provide an email and password");
  }
  const user = await User.findOne({ email });
  if (!user) {
    throw new unAuthError("Invalid Credentials");
  }
  const isPassCorrect = await user.comparePassword(password);
  if (!isPassCorrect) {
    throw new unAuthError("Invalid Credentials");
  }
  const token = user.createJWT();
  res
    .status(StatusCodes.OK)
    .json({ user: { name: user.name, userID: user._id }, token })
    
    
};

module.exports = { register, login };
