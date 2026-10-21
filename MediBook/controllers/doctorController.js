const Doctor = require("../models/Doctor");

exports.addDoctor = async (req, res) => {
    const doctor = new Doctor(req.body);
    await doctor.save();
    res.json(doctor);
};

exports.getDoctors = async (req, res) => {
    const doctors = await Doctor.find();
    res.json(doctors);
};