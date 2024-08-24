const Joi = require("joi");

exports.validateSignInUser = (data) => {
  const joiSchema = Joi.object({
    name: Joi.string().min(4).max(30).required(),
    email: Joi.string().min(4).max(30).required(),
    password: Joi.string().min(4).max(30).required(),
  });
  return joiSchema.validate(data);
};
exports.validateLoginUser = (data) => {
  const joiSchema = Joi.object({
    email: Joi.string().min(4).max(30).required(),
    password: Joi.string().min(4).max(30).required(),
  });
  return joiSchema.validate(data);
};
