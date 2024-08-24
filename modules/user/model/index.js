const { Schema, model } = require("mongoose");
const { hashPassword } = require("../../../services/bcrypt");

const userSchema = new Schema({
  name: { type: String, trim: true, required: true },
  email: { type: String, trim: true, required: true },
  password: { type: String, trim: true, required: true },
  createdAt: { type: Date, default: Date.now },
});
userSchema.pre("save", async function () {
  this.password = await hashPassword(this.password);
});

const Users = model("User", userSchema);
module.exports = Users;
