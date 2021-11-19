const UnauthError = require('./unathenticated');
const BadRequest = require('./badRequest');
const CustomAPIError = require('./customAPI');
const NotFound = require('./notFound');

module.exports = {
    UnauthError,
    BadRequest,
    CustomAPIError,
    NotFound
}