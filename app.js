const express = require('express')
const app = express()
const path = require('path')
const usersRoute = require('./routes/users.js')
const defaultRoute = require('./routes/default')

app.get("/favicon.ico", (req, res, next) => res.status(204))

app.use(usersRoute)

app.use(express.static(path.join(__dirname, 'public')))

app.listen(3001)