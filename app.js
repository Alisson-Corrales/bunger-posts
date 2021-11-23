//enviroment setup
require("dotenv").config();
require("express-async-errors");

//app core
const express = require('express');
const app = express();
const connectDB = require('./DB/connect')

//middleware
const authMid = require("./middleware/authentication")

//routes
const authRouter = require("./routes/auth");
const postsRouter = require("./routes/posts");



//Security
const xss = require("xss-clean")
const helmet = require("helmet")
const cors = require("cors")

//
//variables
const port = process.env.PORT || 3000


app
    .set('trust proxy', 1)
    .use(helmet()).use(cors()).use(xss())
    .use([express.urlencoded({ extended: false }), express.json()])
    //paths
    .use("/api/v1/posts", authMid, postsRouter)
    .use("/api/v1/auth", authRouter)

const startup = async () => {
    try {
        await connectDB(process.env.MONGO_URL);
        app.listen(port, () => console.log(`listening @ ${port}`));
    } catch (err) {
        console.log(err);
    }
}

startup()