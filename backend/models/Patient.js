const mongoose = require("mongoose");

module.exports = mongoose.model("Patient", {
  firstname: String,
  lastname: String,
  phoneNumber: Number,
  dateOfBirth: Date,
  email: String,
  gender: String,
  appointment: Date,
  adress: String,
});
