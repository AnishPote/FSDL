# Assignment 05: Travel Booking Web Application using Node.js, Express.js & MongoDB

## Objective
To develop a backend web application using Node.js and Express.js integrated with MongoDB (Mongoose ODM) to handle travel package exploration, user reservation forms, and booking record storage.

## Technologies Used
- Node.js (Runtime Environment)
- Express.js (Backend REST API Framework)
- MongoDB & Mongoose (NoSQL Database ODM)
- HTML5, CSS3, JavaScript (Frontend)

## Features Implemented
- RESTful endpoints for listing vacation packages and creating bookings (`POST /api/bookings`).
- MongoDB Schema definition with field validations for customer contact, traveler count, and travel dates.
- Clean client UI with package cards and booking confirmation form.

## Directory Structure
```
Assignment 05 - Travel Booking Web Application/
├── server.js               # Express application entry & REST API routes
├── package.json            # Node project configuration & dependencies
├── models/
│   └── Booking.js          # Mongoose Booking schema
├── public/
│   └── index.html          # Frontend booking interface
└── README.md               # Assignment documentation
```

## How to Run
1. Install dependencies:
   ```bash
   npm install
   ```
2. Start MongoDB locally (`mongod`).
3. Run server:
   ```bash
   npm start
   ```
4. Access `http://localhost:3000` in browser.
