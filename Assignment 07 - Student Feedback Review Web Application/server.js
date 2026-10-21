const express = require("express");
const mongoose = require("mongoose");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(express.static("public"));

mongoose.connect("mongodb://127.0.0.1:27017/feedbackDB")
    .then(() => console.log("Connected to Student Feedback MongoDB"))
    .catch(err => console.error(err));

const Feedback = require("./models/Feedback");

app.get("/api/feedbacks", async (req, res) => {
    try {
        const feedbacks = await Feedback.find().sort({ createdAt: -1 });
        res.json(feedbacks);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.post("/api/feedbacks", async (req, res) => {
    try {
        const feedback = new Feedback(req.body);
        await feedback.save();
        res.status(201).json({ message: "Feedback submitted successfully!", feedback });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

app.listen(PORT, () => {
    console.log(`Feedback server running on http://localhost:${PORT}`);
});
