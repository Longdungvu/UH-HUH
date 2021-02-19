// html library
const http = require("http");
// get file from local disk library
const fs = require('fs').promises;

const host = '192.168.0.103';
const port = 8000;

// html file stay here
let indexFile;

// serving html file
const requestListener = function (req, res) {
    res.setHeader("Content-Type", "text/html");
    res.writeHead(200);
    res.end(indexFile);
};

// create the Server
const server = http.createServer(requestListener);

// read file in same folder as node js file
fs.readFile(__dirname + "/index.html")
    // if read file successful save it to indexFile
    .then(contents => {
        indexFile = contents;
        // then run the Server
        server.listen(port,host, () => {
            console.log(`Server is running on http://${host}:${port}`);
        });
    })
    // if something wrong do This
    .catch(err => {
       console.error(`Could not read index.html file: ${err}`);
       process.exit(1);
    });
