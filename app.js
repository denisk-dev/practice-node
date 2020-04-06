const port = 3000;

const express = require('express');

const router = require('./Routes/routes.js'); 

const app = express();


app.use(router);


app.listen(port);