const express = require('express');
const app = express();
const path = require('path');



app.listen(process.env.PORT || 4200);

//Path Location Strategy

app.get('/*', function (req, res) {
    res.sendFile('index.html');
})