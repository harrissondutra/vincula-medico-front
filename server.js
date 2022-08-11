const express = require('express');
const jsonServer = require('json-server');
const path = require('path');

const app = express();

app.use('/api', jsonServer.router('db.json'));

// Serve only the static files form the dist directory
app.use(express.static(__dirname +'/dist/vincula-medico-front'));

app.get('/*', (req, res) =>
    res.sendFile(__dirname +'/dist/vincula-medico-front/index.html'),
);

// Start the app by listening on the default Heroku port
const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Server started on port ${port}`));
