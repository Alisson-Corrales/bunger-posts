const { StatusCodes } = require("http-status-codes")
const Bung = require("../models/bunger");
//const User = require("../models/user")




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
    //const { userID } = req.user.userID;

    const bung =  await Bung.find({ createdBy: req.user.userID }).sort(
        "created at"
    )
    res.status(StatusCodes.OK).json({ bung, length: bung.length });
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