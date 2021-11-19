const CustomAPIError = require("./customAPI");
const { StatusCodes } = require("https-status-codes");

class UnauthError extends CustomAPIError {
    constructor(message) {
        super(message);
        this.StatusCodes = StatusCodes.BAD_REQUEST;
    }
}

module.exports = UnauthError;