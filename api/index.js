var axios = require('axios');
// const baseURL = 'https://lit-plains-39060.herokuapp.com/api/'
const baseURL = 'https://d5b2359f.ngrok.io/api/'
var axiosInstance = axios.create({
    baseURL
    /* other custom settings */
});

module.exports = axiosInstance;