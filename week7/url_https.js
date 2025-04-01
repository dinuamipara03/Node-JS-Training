// A URL (Uniform Resource Locator) is the address of a unique resource on the internet. It is one of the key mechanisms used by browsers to retrieve published resources, such as HTML pages, CSS documents, images, and so on.

// http://www.example.com:80/path/to/myfile.html?key1=value1&key2=value2#SomewhereinTheDocument
// http://: Scheme
// www.example.com:80:Authority
// /path/to/myfile.html:path
// ?key1=value1&key2=value2 :Parameters
// #SomewhereinTheDocument: anchor


// A relative URL specifies a resource's location relative to the current page's address, omitting the protocol and domain, while an absolute URL specifies the full address. 
// Relative URLs are shorter and often more portable, while absolute URLs are more reliable and easier to understand.

// Examples:
// /images/logo.png (relative to the root directory)
// ../styles.css (relative to the parent directory) 
// ./page.html (relative to the current directory)


// An absolute URL is a complete web address that includes all the information needed to find a resource on the internet. It's also known as an absolute URI (Uniform Resource Identifier). 
// Example of an absolute URL https://www.example.com/about/team. 
// The absolute URL includes the protocol (https://), domain (www.example.com), and path (/about/team) to the resource.


// HTTPS (Hypertext Transfer Protocol Secure) is the secure version of HTTP, the protocol used to transfer data between a web browser and a website, ensuring encrypted and secure communication by using TLS/SSL encryption. HTTPS is used to protect highly confidential online transactions like online banking and online shopping order forms. 


// Hypertext Transfer Protocol (HTTP) is an application-layer protocol for transmitting hypermedia documents, such as HTML. It was designed for communication between web browsers and web servers, but it can also be used for other purposes, such as machine-to-machine communication, programmatic access to APIs, and more.
//HTTP is stateless, but not sessionless
//HTTP is stateless: there is no link between two requests being successively carried out on the same connection.


//demo http
var http = require('http');

//create a server object:
http.createServer(function (req, res) {
  res.write('Hello World!'); //write a response to the client
  res.end(); //end the response
}).listen(3333);


//demo https
const https = require('https');
const fs = require('fs');

https.createServer({
    cert: fs.readFileSync('./localhost.crt'),//for ssl certificate
    key: fs.readFileSync('./localhost.key') //for ssl key
}, (req, res) => {
    res.writeHead(200);
    res.end('Hello from Node https!\n');
}).listen(3333);
console.log("Server listening on https://localhost:3333/");

//gives error of safety but run
