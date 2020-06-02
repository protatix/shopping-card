const axios = require('axios');
require('dotenv').config();

//OUR JSON SERVER

const api = axios.create({
    baseUrl: process.env.BASE_JSON_URL,
    proxy: {
        port: process.env.PORT
    }
});

module.exports = api;