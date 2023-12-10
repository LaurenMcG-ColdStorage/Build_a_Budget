const express = require('express');         //Setup express dependency
const app = express()                       //Create an instance of express
const port = process.env.PORT || 5010;

app.use(express.static('server/public'));   //Express static file

app.listen(port, () => {                    //Spin up the server
    console.log('Listening on port: ', port);
});