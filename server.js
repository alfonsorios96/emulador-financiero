const path = require('path');

const env = require('dotenv').config();
const express = require('express');
const logger = require('winston-color');

let server = express();

if (process.env.NODE_ENV === 'development') {
    server.use(express.static(path.join(__dirname)));
} else if (process.env.NODE_ENV === 'production') {
    server.use(express.static(path.join(__dirname, 'build/es6-unbundled')));
}

server.listen(process.env.PORT);
