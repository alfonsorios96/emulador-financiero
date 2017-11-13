const path = require('path');

const env = require('dotenv').config();
const express = require('express');
const logger = require('winston-color');

let server = express();

server.use(express.static(path.join(__dirname + process.env.PATH)));

server.listen(process.env.PORT);
logger.info(`Server is running on: http://127.0.0.1:${process.env.PORT}`);
