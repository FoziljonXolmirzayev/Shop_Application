const express = require("express");
const { signUp, login } = require("../modules/auth");
const authRoute = express.Router();

authRoute.post("/signUp", signUp);
authRoute.post("/login", login);

module.exports = authRoute;
