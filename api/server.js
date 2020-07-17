const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const restricted = require('../auth/restricted-middleware');

// add routers here
const usersRouter = require('../users/users-router.js');
const authRouter = require('../auth/auth-router.js');

const server = express();
server.use(express.json());

server.use('/api/users', restricted, usersRouter);
server.use('/api/auth', authRouter);

server.use(helmet());
server.use(cors());

server.get("/", (req, res) => {
  res.send("Server is running");
});

module.exports = server;