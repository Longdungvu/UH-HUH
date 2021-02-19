var express = require('express');
var http = require('http');
var path = require("path");
var bodyParser = require('body-parser');

// ip and server's port
const host = '192.168.0.103';
const port = 8000;

// create express application
var app = express();

// create server
var server = http.createServer(app);

var telNumber;
var message;

// path to html file
app.use(express.static(path.join(__dirname,'./public')));

// for parsing http request
app.use(bodyParser.urlencoded({ extended: true }));

// serveving html file
app.get('/', (req,res) => {
  res.render('index.html')
})

// read the user input data send back
app.post('/submit', (req, res) =>{
  telNumber = req.body.number;
  message = req.body.text;
  console.log('Phone: ' + telNumber) // syntax req.body.+ whatever is named on input field
  console.log('Text: ' + message)
  res.redirect('/')
})

// run server
server.listen(port,host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});
