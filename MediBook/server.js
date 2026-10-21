// server.js
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

const app = express();

app.use(express.json());
app.use(cors());

connectDB();

// Routes
app.use("/api/doctors", require("./routes/doctorRoutes"));
app.use("/api/users", require("./routes/userRoutes"));
app.use("/api/appointments", require("./routes/appointmentRoutes"));

app.get("/", (req, res) => {
    res.send("MediBook API Running");
});

app.listen(5000, () => console.log("Server running on port 5000"));