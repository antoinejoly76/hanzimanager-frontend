

const express = require('express');
const app = express();

var path = require("path");

// Run the app by serving the static files
// in the dist directory
app.use(express.static(__dirname + '/dist/hanzimanager'));
// Start the app by listening on the default
// Heroku port
app.listen(process.env.PORT || 4200);

//Path Location Strategy

app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname + '/dist/hanzimanager/index.html'));
})