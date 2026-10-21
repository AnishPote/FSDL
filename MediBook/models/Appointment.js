const mongoose = require("mongoose");

const appointmentSchema = new mongoose.Schema({
    userId: String,
    doctorId: String,
    date: String,
    time: String
});

module.exports = mongoose.model("Appointment", appointmentSchema);