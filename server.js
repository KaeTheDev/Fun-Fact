// 1. import the express library
const express = require('express');

// Node.js 'path' module
const path = require('path');

// 2. Create an instance of an Express application
const app = express();

// 3. Define the port the server will run on
const port = 3000;

// 4. Define a route handler for GET requests to the root URL ('/')
app.get('/', (req, res) => {
    // Tell Express to use the 'express.static' middleware
// to serve all files from the 'public' directory.
    res.sendFile(path.join(__dirname, 'public/index.html'));
  });

  // 5. Define a route handler for GET requests to the root URL ('/contact')
  app.get('/contact', (req, res) => {
    // Tell Express to use the 'express.static' middleware
// to serve all files from the 'public' directory.
    res.sendFile(path.join(__dirname, 'public/contact.html'));
  });

  // 6. Start the server and have it listen for incoming connections
app.listen(port, ()=> {
    console.log(`Server is running at http://localhost:${port}`);
});