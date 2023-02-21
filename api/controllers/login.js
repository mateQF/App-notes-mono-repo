const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const loginRouter = require('express').Router()
const User = require('../models/User')

loginRouter.post('/', async (req, res) => {
  const { body } = req
  const { userName, password } = body // password

  const user = await User.findOne(userName) // User.findOne({ userName }) -> testing
  const passwordCorrect = user === null
    ? false
    : bcrypt.compare(password, user.passwordHash) // password

  if (!(user && passwordCorrect)) {
    res.status(401).json({
      error: 'Incorrect username or password'
    })
  }

  const userForToken = {
    id: user._id,
    userName: user.userName
  }

  if (userForToken === null) {
    console.log('es null')
  }
  console.log(userForToken)

  const token = jwt.sign(
    userForToken,
    process.env.JWT_SECRET
  )

  res.send({
    name: user.name,
    userName: user.userName,
    token
  })
})

module.exports = loginRouter
