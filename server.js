const express = require("express");
const bodyParser = require("body-parser");
const mysql = require("mysql2/promise");
require("dotenv").config();
const cors = require("cors");
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

app.post("/send-message", async (req, res) => {
  const { message } = req.body;

  console.log("Received message from client:", message);

  try {
    const connection = await pool.getConnection();

    // Insert the message into the database
    const [result] = await connection.execute(
      "INSERT INTO chat_app_db (chat_id, chat_msg) VALUES (NULL, ?)",
      [message],
    );

    connection.release();

    res.json({ status: "Message received and inserted into the database." });
  } catch (error) {
    console.error("Error inserting message into the database:", error);
    res
      .status(500)
      .json({ error: "An error occurred while inserting the message." });
  }
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

// http://localhost:3000
// node server.js
