// const express = require('express');
// const app = express();

// app.get('/api/data', (req, res) => {
//     const responseData = {
//         message: 'Hello, Express!'
//     };

//     res.format({
//         'text/plain': () => {
//             res.send('hey');
//         },
//         'text/html': () => {
//             res.send('<p>hey</p>');
//         },
//         'application/json': () => {
//             res.send({ message: 'hey' });
//         },
//         default: () => {
//             // Log the request and respond with 406
//             res.status(406).send('Not Acceptable');
//         }
//     });
// });

// app.listen(3000, () => {
//     console.log('Server is running on port 3000');
// });



"use strict";
const express = require("express");
const app = express(); 

const port = 3000; 


// res.format(object)

// Performs content-negotiation on the Accept HTTP header on the request object, when present. 
// It uses req.accepts() to select a handler for the request, based on the acceptable types ordered by their quality values. 
// If the header is not specified, the first callback is invoked. 
// When no match is found, the server responds with 406 “Not Acceptable”, or invokes the default callback.

 // The Content-Type response header is set when a callback is selected. However, you may alter this within the callback using methods such as res.set() or res.type().

// The following example would respond with { "message": "hey" } when the Accept header field is set to “application/json” or “*/json” (however if it is “*/*”, then the response will be “hey”).


app.get("/", (request, response) => {
    response.set("Content-Type", "text/plain"); // expected output: "Hello text/plain" but I get "Hi text/html!"
    response.format({
        "text/plain": () => response.send("Hello  text/plain"),
        "text/html": () => response.send("<h1 style='color: blue'>Hi text/html!</h1>"),
        "application/json": () => response.send({message: "Aloha application/json"}),
        "default": () => response.status(406).send("Not acceptable")
    });
});

app.listen(port, () => console.log("Node server running on port", port));