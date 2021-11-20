const StatusCodes = require("http-status-codes")

const errorHandlerMiddleware = (err, req, res, next) => {
  let customError = {StatusCode = err.StatusCode || StatusCodes.INTERNAL_SERVER_ERROR, 
    msg: err.msg || 'something went wrong please try again later'}
    
    if(err.name === 'Validation'){
      customError.msg = object.values(err.errors).map((item) => item.msg).join(", ")
      customError.StatusCode = 400
    }
    if(err.code && err.code === 11000){
      customError.msg = `${Object.values(err.keyValue)} is already taken please provide a diffrent ${Object.keys(err.keyValue)} `
    }
    if(err.name === 'CastError'){
      customError.msg = `No item found with id ${err.value._id}`
      customError.StatusCode = 404;

    }


    return res.status(customError.StatusCode).json({ msg: customError, msg})
}

module.exports = errorHandlerMiddleware

module.exports = errorHandlerMid