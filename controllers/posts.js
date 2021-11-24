const { StatusCodes } = require("http-status-codes");
const Bung = require("../models/bunger");
const NotFound = require("../errors/notFound")
//const User = require("../models/user")

//🍔
const postPost = async (req, res) => {
  const dude = req.user.userID;
  console.log(req.body);
  req.body.createdBy = dude;
  const bunger = await Bung.create(req.body);

  res.status(StatusCodes.CREATED).json({ bunger });
};

//🍔
const postPost = async (req, res) => {
    const dude = req.user.userID
    console.log(req.body);
    req.body.createdBy = dude
    const bunger = await Bung.create(req.body);
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
    )
    res.status(StatusCodes.OK).json({ bung, length: bung.length });
};

//🍔
const editPost = async (req, res) => {
    const { _id: bungerID, title: bungerName } = req.body
    const { userID } = req.user

    if (!bungerID || !bungerName) {
        throw new badRequestError('Please provide Bunger Name and title')
    }
    if (!userID) {
        throw new badRequestError('Please provide userID')
    }
    const Bunger = await Bunger.findByIdAndUpdate(
        { bungerID, bungerName, createdBy: userID },
        req.body,
        { new: true, runValidators: true }
    )

    if (!Bunger) {
        throw new badRequestError(`no bunger with id ${bungerID}`)
    }
    res.status(StatusCodes.OK).json({ Bunger })
}



//🍔
const deletePost = async (req, res) => {
    const { _id: bungerID } = req

    const Bunger = await Bunger.findOneAndRemove({ _id: bungerID })
    if (!Bunger) {
        throw new badRequestError(`no bunger with id ${bungerID}`)
    }
    res.status(StatusCodes.OK).json({ Bunger })
}

module.exports = { postPost, getOnePost, getAllPosts, editPost, deletePost }