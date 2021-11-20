const express = require('express');
const app = express();
//enviroment setup
require("dotenv").config();
//require("express-async-errors");

//routes
const authRouter = require("./routes/auth");
const postsRouter = require("./routes/posts");

//app core
const connectDB = require('./DB/connect')


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
    .use("/api/v1/posts", postsRouter)
    .use("api/v1/auth", authRouter)
const startup = async () => {
    try {
        await connectDB(process.env.MONGO_URL);
        app.listen(port, () => console.log(`listening @ ${port}`));
    } catch (err) {
        console.log(err);
    }
}

startup()