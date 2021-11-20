const Bung = require("../models/bunger");
const { StatusCode } = require("http-status-codes")


//🍔
const postPost = (req, res) =>{
    res.send("this works")
}

//🍔
const getOnePost = (req, res) =>{
    res.send("this works")
}

//🍔
const getAllPosts = async (req, res) =>{
    const bung =  await Bung.find({ createdBy: req.user.userID }).sort(
        "created at"
    )
    res.status(StatusCode.OK).json({ jobs, length: jobs.length });
};

//🍔
const editPost = (req, res) =>{
    res.send("this works")
}

//🍔
const deleteAllPosts = (req, res) =>{
    res.send("this works")
}

//🍔
const deletePost = (req, res) =>{
    res.send("this works")
}

module.exports = { postPost, getOnePost, getAllPosts, editPost, deleteAllPosts, deletePost }