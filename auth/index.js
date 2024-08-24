const Users = require("../modules/user/model");
const {
  validateSignInUser,
  validateLoginUser,
} = require("../modules/user/validators");
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
    const { name, email } = await Users.create(value);
    const token = generateToken(signedUser._id);
    res.send({ token, user: { name, email } });
  } catch (error) {
    throw new Error(error);
  }
};

module.exports.login = async (req, res) => {
  try {
    const { value, error } = validateLoginUser(req.body);

    if (error) {
      res.send("Incorrect data: " + error);
      return;
    }

    const foundUser = await Users.findOne({ email: value.email });
    const isPasswordCorrect = await comparePasswords(
      foundUser.password,
      value.password
    );

    if (!isPasswordCorrect) {
      res.status(401).send("Email or password is incorrect !");
      return;
    }

    const token = generateToken(value._id);
    res.status(200).send(token);
  } catch (error) {
    throw new Error(error);
  }
};
