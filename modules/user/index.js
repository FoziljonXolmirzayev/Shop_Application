const Users = require("./model");

module.exports.createUser = async (req, res) => {
  try {
    const createdUser = await Users.create(req.body);
    res.send(createdUser);
  } catch (error) {
    throw new Error(error);
  }
};
module.exports.getUsers = async (req, res) => {
  try {
    const users = await Users.find({});
    res.send(users);
  } catch (error) {
    throw new Error(error);
  }
};
module.exports.deleteUser = async (req, res) => {
  try {
    const deletedUser = await Users.findByIdAndDelete(req.params.id);
    if (!deletedUser) {
      res.send("User not found !");
    }
    res.send(deletedUser);
  } catch (error) {
    throw new Error(error);
  }
};
module.exports.updateUser = async (req, res) => {
  try {
    const updatedUser = await Users.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!updatedUser) {
      res.send("User not found !");
    }
    res.send(updatedUser);
  } catch (error) {
    throw new Error(error);
  }
};
