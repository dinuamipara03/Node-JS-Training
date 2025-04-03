//The res object represents the HTTP response that an Express app sends when it gets an HTTP request.
// app.get('/user/:id', (req, res) => {
//     res.send(`user ${req.params.id}`)
//   })
const express = require('express')
const app = express()
// ++++++++++++++++++++++++++++++++++++++++++++++++Properties+++++++++++++++++++++++++++++++++++++++++++++++++++
// res.app 
// This property holds a reference to the instance of the Express application that is using the middleware.
// res.app is identical to the req.app property in the request object.

// res.headersSent
// app.get('/', (req, res) => {
//     console.log(res.headersSent) // false
//     res.send('OK')
//     console.log(res.headersSent) // true
//   })

// res.locals
// app.use((req, res, next) => {
//     // Make `user` and `authenticated` available in templates
//     res.locals.user = req.user
//     res.locals.authenticated = !req.user.anonymous
//     res.send('OK')
//     next()
//   })

// res.req This property holds a reference to the request object that relates to this response object.


// ++++++++++++++++++++++++++++++++++++++++++++Methods+++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// res.append()
// res.append('Link', ['<http://localhost/>', '<http://localhost:3000/>'])
// res.append('Set-Cookie', 'foo=bar; Path=/; HttpOnly')
// res.append('Warning', '199 Miscellaneous warning')
// res.append(field, [value]) Method Demo Example


var router = express.Router();

// app.get('/api', function(req, res){
//        res.append('Link', ['',''])
//    console.log(res.get('Link')); // URL Array
//    res.send('Hello World!')
// });

// res.attachment()
// app.get('/api', function(req, res){
//     // res.attachment('attacment.txt');
//     res.attachment('download.jpeg');
//     console.log(res.get('Content-Disposition'));
//     res.end();
//  });

// res.cookie()
// app.get('/api', function(req, res){
//    // Setting the below key-value pair
//    res.cookie('name', 'ExpressJS');
//    res.send("Cookies are set");
// });

// res.clearCookie()
// res.cookie('name', 'tobi', { path: '/admin' })
// res.clearCookie('name', { path: '/admin' })

// res.download()
// app.get('/api', function(req, res) {
//     res.download('download.jpeg', 'download.jpeg', function(err) {
//         if (err) {
//             console.log(err);
//             // Handle error, but keep in mind the response may be partially-sent
//             // so check res.headersSent
//             if (!res.headersSent) {
//                 res.status(500).send(err);
//             }
//         } else {
//             console.log('Sent:', 'download.jpeg');
//         }
//     });
// });

// res.end()
// res.end()
// res.status(404).end()


// res.get()
// res.get('Content-Type')
// => "text/plain"

// res.json()
// res.json(null)
// res.json({ user: 'tobi' })
// res.status(500).json({ error: 'message' })

// const json = require('res-json');

// app.use(json());

// app.get('/', (req, res) => {
//   res.json({id: 1, message: 'Hello, World!'})
// });

// res.jsonp()
// const json = require('res-json');

// app.use(json());

// app.get('/', (req, res) => {

//     res.status(500).jsonp({ error: 'message' })
// });


// res.links()
// res.links({
//     next: 'http://api.example.com/users?page=2',
//     last: 'http://api.example.com/users?page=5'
//   })
// app.get('/api', function(req, res){
//     res.links({
//        next: 'https://google.com',
//        middle: 'https://github.com'
//     });
//     console.log(res.get('link'));
//     res.send('Hello World!')
//  });


// res.location()
// app.get('/api', function(req, res){
//     res.location('http://google.com');
//     console.log(res.get('location'));
//     res.end();
//  });


// res.redirect()
// app.get('/api', function(req, res){
//     res.redirect('http://example.com')
//     res.end();
//  });


// res.render() as performed in app2


// res.send()
// app.get('/api', function(req, res){
//     res.send('<h1>Hello</h1>');
//     console.log(res.get('Content-Type'));
//     res.end();
//  })


// // res.sendFile()
// app.get('/', (req, res) => {
//     res.sendFile('home.html', { root: __dirname });
// });

// res.sendStatus()
// app.get('/', (req, res) => {
//     res.sendStatus(404)
// });

// res.set()
// app.get('/api', function(req, res){
//     res.set({
//        'Content-Type': 'text/html'
//     });
//      console.log("Content-Type is: ", res.get('Content-Type'));
//     res.end();
//  });


// res.status()
// app.get('/', (req, res) => {
//     res.status(400).send('Bad Request')
//     });


// res.type()
// app.get('/example', (req, res) => {
//     res.type('application/json');
//     res.send({ message: 'Hello, world!' });
//   });
  
//   app.get('/page', (req, res) => {
//     res.type('.html');
//     res.send('<h1>Hello, World!</h1>');
//   });


// res.vary()
app.get('/api', function(req, res){
    res.vary('User-Agent').end();
    console.log("User-Agent field added to the Vary header.");
 });

 
app.listen(3000)