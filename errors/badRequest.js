const { StatusCodes } = require("http-status-codes");
const CustomAPIError = require("./customAPI");

class BadRequest extends CustomAPIError {
    constructor(message) {
        super(message);
        this.StatusCodes = StatusCodes.BAD_REQUEST;
    }
}

module.exports = BadRequest;