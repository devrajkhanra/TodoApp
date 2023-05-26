// Server

const express = require('express');
const dotenv = require('dotenv').config({path: './.env'})
const sequelize = require('./config/db');

// Create an App
const app = express();
const PORT = 3001;

// Start the Server
sequelize
.sync()
.then(() => {
    console.log('Database Connection: Successfull');
    
    // Listen to PORT.
    app.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}`);
    });
}).catch((error) => {
    throw new Error(error)
});
