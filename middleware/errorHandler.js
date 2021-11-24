const StatusCodes = require("http-status-codes")

const errorHandlerMiddleware = (err, req, res, next) => {
  let customError = {StatusCode = err.StatusCode || StatusCodes.INTERNAL_SERVER_ERROR, 
    msg: err.msg || 'try again later we are having bunger issues'}
    
    if(err.name === 'Validation'){
      customError.msg = object.values(err.errors).map((item) => item.msg).join(", ")
      customError.StatusCode = 400
    }
    if(err.code && err.code === 11000){
      customError.msg = `${Object.values(err.keyValue)} is already taken give us a diffrent ${Object.keys(err.keyValue)} or else`
    }
    if(err.name === 'CastError'){
      customError.msg = `Cannot find anything with id ${err.value._id}. You sure you can read?`
      customError.StatusCode = 404;

    }


    return res.status(customError.StatusCode).json({ msg: customError, msg})
}

module.exports = errorHandlerMiddleware

module.exports = errorHandlerMid