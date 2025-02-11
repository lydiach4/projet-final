const Patient = require("../models/Patient");

exports.getPatients = async (req, res, next) => {
  try {
    const Patients = await Patient.find();
    return res.json(Patients);
  } catch (e) {
    next(e);
  }
};

exports.createAppointment = async (req, res, next) => {
  try {
    const Appointment = await Patient.create({
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      phoneNumber: req.body.phoneNumber,
      address: req.body.address,
      dateOfBirth: req.body.dateOfBirth,
      email: req.body.email,
      gender: req.body.gender,
    });

    return res.status(201).json(Appointment);
  } catch (e) {
    next(e);
  }
};
exports.updateAppointment = async (req, res, next) => {
  try {
    const patient = await Patient.findById(req.params.id);

    if (!patient) {
      return res.status(404).json({ message: "Patient not found" });
    }

    const updatedAppointment = await Patient.findByIdAndUpdate(
      req.params.id,
      {
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        phoneNumber: req.body.phoneNumber,
        address: req.body.address,
        dateOfBirth: req.body.dateOfBirth,
        email: req.body.email,
        gender: req.body.gender,
      },
      { new: true }
    );

    return res.json(productResource(updatedAppointment));
  } catch (e) {
    next(e);
  }
};

exports.getAppointment = async (req, res, next) => {
  try {
    const appointment = await Patient.findById(req.params.id);
    return res.json(appointment);
  } catch (e) {
    next(e);
  }
};
exports.deleteAppointment = async (req, res, next) => {
  try {
    const patient = await Patient.findById(req.params.id);

    if (!patient) {
      return res.status(404).json({ message: "Appointment not found" });
    }

    await patient.deleteOne();

    return res.json({ message: "Appointment deleted successfully" });
  } catch (e) {
    next(e);
  }
};
