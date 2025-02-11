const express = require("express");
const multer = require("multer");
const patientController = require("../controllers/patientController");
const validationMiddleware = require("../middlewares/validationMiddleware");
const validObjectIdMiddleware = require("../middlewares/validObjectIdMiddleware");
const {
  createPatientSchema,
  updatePatientSchema,
} = require("../validations/patientValidations");

const router = express.Router();

const upload = multer({ dest: "./public/uploads" });

router.get("/patients", patientController.getPatients);
router.post(
  "/patients",
  validationMiddleware(createPatientSchema),
  patientController.createAppointment
);
router.get(
  "/patients/:id",
  validObjectIdMiddleware,
  patientController.getAppointment
);
router.put(
  "/patients/:id",
  validObjectIdMiddleware,
  validationMiddleware(updatePatientSchema),
  patientController.updateAppointment
);
router.delete(
  "/patients/:id",
  validObjectIdMiddleware,
  patientController.deleteAppointment
);

module.exports = router;
