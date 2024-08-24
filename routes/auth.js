const express = require("express");
const { signUp } = require("../auth");
const authRoute = express.Router();

authRoute.post("/signUp", signUp);

module.exports = authRoute;
