const Users = require("../modules/user/model");
const { validateSignInUser } = require("../modules/user/validators");
const { comparePasswords } = require("../services/bcrypt");
const { generateToken } = require("../services/jwt");

module.exports.signUp = async (req, res) => {
  try {
    const { value, error } = validateSignInUser(req.body);

    if (error) {
      res.status(400).send("Incorrect data: " + error);
      return;
    }

    const foundUser = await Users.findOne({ email: value.email });
    if (foundUser) {
      res.send("This email already exists! Choose another one.!");
      return;
    }
    const signedUser = await Users.create(value);
    const token = generateToken(signedUser._id);
    res.send(token);
  } catch (error) {
    throw new Error(error);
  }
};

module.exports.login = async (req, res) => {
  try {
    const { value, error } = validateSignInUser(req.body);

    if (error) {
      res.send("Incorrect data: " + error);
      return;
    }

    const foundUser = await Users.findOne({ email: value.email });
    const isPasswordCorrect = await comparePasswords();
  } catch (error) {
    throw new Error(error);
  }
};
