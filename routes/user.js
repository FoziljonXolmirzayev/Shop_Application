const express = require("express");
const {
  createUser,
  getUsers,
  updateUser,
  deleteUser,
} = require("../modules/user");
const userRoute = express.Router();

userRoute.post("/create", createUser);
userRoute.get("/get", getUsers);
userRoute.put("/update/:id", updateUser);
userRoute.delete("/delete/:id", deleteUser);

module.exports = userRoute;
