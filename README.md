# Chat App README
Here's a README.md file that explains how your HTML, client.js, and server.js code work together.

This README provides an overview of a simple chat application that allows users to send and receive messages through a web interface. The application consists of HTML, client-side JavaScript (client.js), and server-side JavaScript (server.js).

## Table of Contents

- [Features](#features)
- [Getting Started](#getting-started)
- [Installation](#nstallation)
- [How It Works](#how-it-works)
- [Authors](#authors)

## Features
- Users can input messages in an input field.
- Sent messages are displayed in real-time on the web page.
- Messages are sent to the server and inserted into a MySQL database.

## Getting Started
Before running the application, ensure you have the following installed:

- Node.js: [Download and install Node.js](https://nodejs.org/).
- XAMPP: [Download and install XAMPP](https://www.apachefriends.org/index.html).

Install all the necessary Node.js packages and dependencies for your Express.js application, including express, body-parser, mysql2, dotenv, and cors, you can use the following commands in your project directory:

## Installation

npm install express body-parser mysql2 dotenv cors


Create a .env file in the root directory and add your MySQL database configuration:
Inside .env add this.
# Database 
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=
DB_DATABASE=chat
# Port 
PORT=3000


Start the server: node server.js
The server will start listening on the specified port.


# How It Works
# HTML (index.html)
Provides the structure for the web page, including a chat container and input form.
Loads the client-side JavaScript (client.js) and styles (styles.css).
# Client-Side JavaScript (client.js)
Handles user interaction and communication with the server.
Defines functions:
addMessage(messageText): Adds a new message to the chat interface.
sendMessageToServer(messageText): Sends a message to the server using a POST request.
Listens for form submission events, captures user input, and sends the message to the server.
Displays the sent message in real-time on the web page.
# Server-Side JavaScript (server.js)
Sets up an Express.js server to handle incoming HTTP requests.
Configures middleware for parsing JSON requests and enabling CORS.
Defines a POST route (/send-message) that receives messages from the client.
Inserts received messages into a MySQL database using parameterized queries.
Responds to the client with a success message or an error message.
Dependencies
Express.js: A web application framework for Node.js.
mysql2: A MySQL library for Node.js.
dotenv: Loads environment variables from a .env file.
cors: Middleware for enabling Cross-Origin Resource Sharing (CORS).


# Authors
Aldas: Enjoy using your chat app! 



