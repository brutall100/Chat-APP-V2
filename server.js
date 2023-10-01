const express = require("express");
const bodyParser = require("body-parser");
const mysql = require("mysql2/promise");
require("dotenv").config();
const cors = require('cors'); 
const app = express();
const port = process.env.PORT;

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
});

app.use(bodyParser.json());

app.use(cors());

app.post("/send-message", (req, res) => {
  const { message } = req.body;

  console.log("Received message from client:", message);

  res.json({ status: "Message received successfully..." });
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});







// const express = require("express");
// const bodyParser = require("body-parser");
// const app = express();
// const mysql = require("mysql2/promise"); // Using promise-based MySQL
// require("dotenv").config();
// const cors = require('cors');

// // Enable CORS for all routes
// app.use(cors());

// const port = process.env.PORT || 9000;

// // Create a MySQL pool for database connections
// const pool = mysql.createPool({
//   host: process.env.DB_HOST,
//   user: process.env.DB_USER,
//   password: process.env.DB_PASSWORD,
//   database: process.env.DB_DATABASE,
// });

// app.use(bodyParser.json());

// // Define a route to handle saving messages
// app.post('http://localhost:9000/api/send-message', async (req, res) => {
//   try {
//     const userMessage = req.body.message;

//     // Check if userMessage is defined and not empty
//     if (userMessage !== undefined && userMessage !== '') {
//       // Insert the message into the database
//       const [result] = await pool.execute(
//         "INSERT INTO chat_app_db (chat_id, chat_msg) VALUES (NULL, ?)",
//         [userMessage]
//       );
//       console.log("Query result:", result);
//       if (result.affectedRows === 1) {
//         res.status(200).json({ message: "Message saved successfully", userMessage });
//       } else {
//         console.error("Error saving message:", result.message);
//         res.status(500).json({ error: "Internal Server Error" });
//       }
//     } else {
//       // Handle the case where userMessage is empty or undefined
//       console.error("userMessage is empty or undefined");
//       res.status(400).json({ error: "Bad Request" });
//     }
//   } catch (error) {
//     console.error("Error saving message:", error);
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// });


// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });


// http://localhost:9000
// node server.js


