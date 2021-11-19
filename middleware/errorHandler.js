const { CustomAPIError } = require('../errors');
const { statusCode } = require("https-status-codes");

const errorHandlerMid = (err, req, res, next) => {
    //tester
    //res.json({ err })
    
    
}

module.exports = errorHandlerMid