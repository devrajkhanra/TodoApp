// Server

const express = require('express');
const cors = require('cors');
const compression = require('compression')
const dotenv = require('dotenv').config({path: './.env'})
const sequelize = require('./config/db');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/authRoutes');

// Create an App
const app = express();
const port = process.env.NODE_ENV || process.env.PORT;

// Enable CORS
app.use(cors());

// Middleware
app.use(compression())
app.use(bodyParser.json());

// Routes
app.use('/auth', authRoutes);

// Start the Server
sequelize
.sync()
.then(() => {
    console.log('Database Connection: Successfull');
    
    // Listen to PORT.
    app.listen(port, () => {
        console.log(`Server is running on http://localhost:${port}`);
    });
}).catch((error) => {
    throw new Error(error)
});
