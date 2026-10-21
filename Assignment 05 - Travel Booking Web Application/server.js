const express = require("express");
const mongoose = require("mongoose");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

// MongoDB Connection
mongoose.connect("mongodb://127.0.0.1:27017/travelDB")
    .then(() => console.log("Database Connected successfully to travelDB"))
    .catch(err => console.error("Database connection error:", err));

// Booking Model
const Booking = require("./models/Booking");

// Routes
app.get("/api/packages", (req, res) => {
    res.json([
        { id: 1, name: "Goa Beach Holiday", price: 12999, days: "4 Days / 3 Nights" },
        { id: 2, name: "Manali Snow Adventure", price: 18499, days: "5 Days / 4 Nights" },
        { id: 3, name: "Kerala Backwaters Tour", price: 21999, days: "6 Days / 5 Nights" }
    ]);
});

app.post("/api/bookings", async (req, res) => {
    try {
        const booking = new Booking(req.body);
        await booking.save();
        res.status(201).json({ message: "Trip booked successfully!", booking });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

app.get("/api/bookings", async (req, res) => {
    try {
        const bookings = await Booking.find();
        res.json(bookings);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.listen(PORT, () => {
    console.log(`Travel Agency Server running on http://localhost:${PORT}`);
});
