//register
const register = (req, res) => {
    res.send("you are registered, clown")
}

//login
const login = (req, res) => {
    res.send("you are logged in, clown")
}

module.exports = { register, login };