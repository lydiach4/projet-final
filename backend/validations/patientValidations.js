const joi = require("joi");

exports.createPatientSchema = joi.object({
  firstname: joi.string().required(),
  lastname: joi.string().required(),
  adress: joi.string(),
  phoneNumber: joi.number().positive().required(),
  gender: joi.string().required(),
  dateOfBirth: joi.date().required(),
  email: joi.string().required(),
  gender: joi.string().required(),
  appointment: joi.date().required(),
});

exports.updatePatientSchema = joi.object({
  firstname: joi.string().required(),
  lastname: joi.string().required(),
  adress: joi.string(),
  phoneNumber: joi.number().positive().required(),
  gender: joi.string().required(),
  dateOfBirth: joi.date().required(),
  email: joi.string().required(),
  gender: joi.string().required(),
  appointment: joi.date().required(),
});
