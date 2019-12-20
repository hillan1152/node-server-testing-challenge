// IMPORT DEPENDENCIES
const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

// IMPORT ROUTES
const nflRouter = require('../nfl/nfl.js');


const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());

server.use('/api', nflRouter);


module.exports = server;