const express = require("express")
const server = express()
const logger = require("morgan")
const db = require("../database/dbConfig")
const cors = require("cors")
const helmet = require("helmet")

server.use(logger("dev"))
server.use(express.json())
server.use(cors())
server.use(helmet())

module.exports = server
