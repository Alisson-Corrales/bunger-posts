const jwt = require("jsonwebtoken");
const { UnauthError } = require('../errors')


const authMid = (req, res, next) => {
    const authHeader = req.headers.authorization

    if (!authHeader || !authentHeader.startsWith("Bearer")) {
        throw new UnauthError("YOU are not authorized to be here >:O")
    }

    const token = authHeader.split(" ")[1]

    try {
        const payload = jwt.verify(token, process.env.JWT_SECRET)
        req.user = { userID: payload.userID, name: payload.name }
        next()
    } catch (err) {
        throw new UnauthError('Not authorized to be in this route!!');
    }
}

module.exports = authMid