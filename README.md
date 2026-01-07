# Express Lab – Fun Fact of the Day: Express Server Project


##  Overview
In this lab, you will build an Express server that fetches a random fun fact from an external public API and serves it to clients in a simplified JSON format. This project demonstrates how a backend server can act as an intermediary between a client and a third-party API.

##  Workplace Context
The owner of “The Daily Grind” coffee shop wants to display a “Fun Fact of the Day” on a digital screen in their shop. Your task is to create a server endpoint that fetches a random fact from a public API and provides it in a format suitable for the digital display. This simulates a real-world scenario where servers aggregate or transform data for client consumption.

##  Learning Objectives
By completing this project, you have demonstrated the ability to:

* Create an Express server that handles GET requests.
* Communicate with an external API using Axios.
* Extract and serve relevant data from an external API response.
* Implement basic error handling for API requests.

##  Description
This lab focuses on building a backend API that:

* Defines a GET /api/fun-fact route.
* Uses Axios to fetch data from the Useless Facts API (https://uselessfacts.jsph.pl/api/v2/facts/random).
* Extracts only the text of the fact from the API response.

* Sends the fact in JSON format:
{ "fact": "A standard deck of cards is a calendar..." }

* Handles errors gracefully by returning a 500 status code and an appropriate error message.

##  Resources

* Express Documentation — https://expressjs.com
* Axios Documentation — https://axios-http.com
* Node.js Documentation — https://nodejs.org/en/docs/
* JavaScript Error Handling Guide — https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch


##  Getting Started

##  Requirements

*  Node.js v24+
*  npm
*  Git
*  A code editor (VS Code recommended)
* Basic knowledge of JavaScript and Node.js

##  OS Compatibility

This lab works on:

*  Windows
*  macOS
*  Linux

##  Installation

1. Clone the repository:

git clone [<repository-url>](https://github.com/KaeTheDev/Fun-Fact.git)

2. Navigate into the project folder:

cd fun-fact

##  Setup

1. Install dependencies:

npm install

2. Run the project:

node server.js

The server will start on http://localhost:3000. The /api/fun-fact endpoint will return a random fun fact in JSON format.

##  Project Structure

fun-fact-server/
├─ node_modules/           # Installed npm packages
├─ public/                 # Optional static HTML files (index.html, contact.html)
├─ server.js               # Main Express server file
├─ package.json            # Project configuration and dependencies
└─ package-lock.json       # Exact versions of installed dependencies


Key Components:
* server.js – Sets up the Express server, defines routes, and integrates Axios to fetch fun facts.

* /api/fun-fact – Endpoint that fetches a random fact from the Useless Facts API and returns { fact: "..." }.

* public/ – Optional folder for static files served by the server (home page, contact page).