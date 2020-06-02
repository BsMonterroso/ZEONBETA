const express = require('express')
const dotenv = require('dotenv')

dotenv.config()

const { mongoose } = require('./database')

const app = express()

app.set('port', process.env.PORT || 3000)

app.use(express.json())