const { StatusCodes } = require("http-status-codes");
const Bung = require("../models/bunger");
const { NotFound, BadRequest } = require("../errors");
//const User = require("../models/user")

//🍔
const postPost = async (req, res) => {
  const dude = req.user.userID;
  console.log(req.body);
  req.body.createdBy = dude;
  const bunger = await Bung.create(req.body);

  res.status(StatusCodes.CREATED).json({ bunger });
};

const getOnePost = async (req, res) => {
  //const { userID } = req.user.userID;
  const { id: jobID } = req.params;

  const bung = await Bung.findOne({ createdBy: req.user.userID, _id: jobID });

  if (!bung) {
    throw new NotFound(`not a post with ${jobID}, doofus`);
  }

  res.status(StatusCodes.OK).json({ bung });
};

//🍔
const getAllPosts = async (req, res) => {
  //const { userID } = req.user.userID;

  const bung = await Bung.find({ createdBy: req.user.userID }).sort(
    "created at"
  );
  res.status(StatusCodes.OK).json({ bung, length: bung.length });
};

//🍔
const editPost = async (req, res) => {
  const {
    user: { userID },
    params: { id: bungerID },
    body: { title: bungerName },
  } = req;

  if (!bungerID || !bungerName) {
    throw new BadRequest("Please provide title and the bunger's ID");
  }

  const bung = await Bung.findByIdAndUpdate(
    { _id: bungerID, createdBy: userID },
    req.body,
    { new: true, runValidators: true }
  );

  if (!bung) {
    throw new BadRequest(`no bunger with id ${bungerID}`);
  }
  res.status(StatusCodes.OK).json({ bung });
};

//🍔
const deletePost = async (req, res) => {
  const {
    params: { id: bungerID },
    user: { userID },
  } = req;

  const bunger = await Bung.findByIdAndRemove({
    _id: bungerID,
    createdBy: userID,
  });
  if (!bunger) {
    throw new BadRequest(`no bunger with id ${bungerID} :<`);
  }
  res.status(StatusCodes.OK).json({ bunger });
};

module.exports = { postPost, getOnePost, getAllPosts, editPost, deletePost };
