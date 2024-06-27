const express = require("express");
const cors = require('cors');
const app = express();
const emailRoute = require("./emailRoute")

const corsOptions = {
    origin: 'https://www.mcagulfacademy.com',
    methods: ['POST', 'GET', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: false
};

app.use(cors(corsOptions));app.use(express.json());
app.use('/api', emailRoute);

module.exports = app;
