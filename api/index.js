var axios = require('axios');
const baseURL = 'https://lit-plains-39060.herokuapp.com/api/'
// const baseURL = 'https://38f3c280.ngrok.io/api/'
var axiosInstance = axios.create({
    baseURL
    /* other custom settings */
});

module.exports = axiosInstance;