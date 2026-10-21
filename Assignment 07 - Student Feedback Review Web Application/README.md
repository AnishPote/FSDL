# Assignment 07: Student Feedback Review Web Application (MERN Stack)

## Objective
To build a complete full-stack web application implementing client and server architecture with React.js / modern JavaScript frontend, Node.js and Express.js REST API backend, and MongoDB database storage for managing academic course reviews and instructor analytics.

## Technologies Used
- Frontend: HTML5, CSS3, React.js / JavaScript (Fetch API)
- Backend: Node.js, Express.js (REST API architecture)
- Database: MongoDB & Mongoose ODM

## Features Implemented
- Dynamic feedback rating and comment submission.
- Real-time aggregation of average ratings and total response stats.
- Course and instructor-wise review feed with star ratings.

## Directory Structure
```
Assignment 07 - Student Feedback Review Web Application/
├── server.js               # Express REST API
├── models/
│   └── Feedback.js         # Mongoose Feedback schema
├── public/
│   └── index.html          # Interactive review UI
└── README.md               # Assignment documentation
```

## How to Run
```bash
npm install express mongoose
node server.js
```
Open `http://localhost:5000`.
