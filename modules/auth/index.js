const Users = require("../user/model");
const { validateSignInUser, validateLoginUser } = require("../user/validators");
const { comparePasswords } = require("../../services/bcrypt");
const { generateToken } = require("../../services/jwt");

module.exports.signUp = async (req, res) => {
  try {
    const { value, error } = validateSignInUser(req.body);

    if (error) {
      res.status(400).send("Incorrect data: " + error);
      return;
    }

    const foundUser = await Users.findOne({ email: value.email });
    if (foundUser) {
      res.status(400).send("This email already exists! Choose another one.!");
      return;
    }
    const { name, email, _id } = await Users.create(value);
    const token = generateToken(_id);
    res.send({ token, user: { name, email } });
  } catch (error) {
    throw new Error(error);
  }
};

module.exports.login = async (req, res) => {
  try {
    const { value, error } = validateLoginUser(req.body);

    if (error) {
      res.status(400).send("Incorrect data: " + error);
      return;
    }

    const foundUser = await Users.findOne({ email: value.email });

    if (!foundUser) {
      res.status(404).send("User not found!");
      return;
    }

    const isPasswordCorrect = await comparePasswords(
      value.password,
      foundUser.password
    );

    if (!isPasswordCorrect) {
      res.status(401).send("Email or password is incorrect !");
      return;
    }

    const token = generateToken(value._id);
    res.send({ token, user: { name: foundUser.name, email: foundUser.email } });
  } catch (error) {
    throw new Error(error);
  }
};
