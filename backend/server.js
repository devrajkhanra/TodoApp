// Server

const express = require('express');
const {logger} = require('./middlewares/logger')
const errorHandler = require('./middlewares/errorHandler')
const cors = require('cors');
const compression = require('compression')
const dotenv = require('dotenv').config({path: './.env'})
const sequelize = require('./config/db');
const bodyParser = require('body-parser');


// Create an App
const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(logger)
app.use(errorHandler)
app.use(cors());
app.use(compression())
app.use(express.json())
app.use(bodyParser.json());

// Routes

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
