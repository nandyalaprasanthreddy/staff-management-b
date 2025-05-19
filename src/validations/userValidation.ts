import Joi from "joi";

export const userSchema = Joi.object({
  userName: Joi.string().alphanum().min(3).max(30).required(),
  role: Joi.string().required(),
  deptName: Joi.string().min(3).max(10).required(),
});
