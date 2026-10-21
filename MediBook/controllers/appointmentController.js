const Appointment = require("../models/Appointment");

exports.bookAppointment = async (req, res) => {
    const appointment = new Appointment(req.body);
    await appointment.save();
    res.json({ message: "Booked", appointment });
};

exports.getAppointments = async (req, res) => {
    const data = await Appointment.find();
    res.json(data);
};