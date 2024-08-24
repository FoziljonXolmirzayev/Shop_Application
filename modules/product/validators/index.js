const Joi = require("joi");
exports.validateProduct = (data) => {
  const joiSchema = Joi.object({
    name: Joi.string().min(2).trim().required(),
    description: Joi.string().min(2).trim().required(),
    price: Joi.number().min(0).required(),
    discount: Joi.number().min(0).max(100),
    quantity: Joi.number().min(1).required(),
  });
  return joiSchema.validate(data);
};
