//The req object represents the HTTP request and has properties for the request query string, parameters, body, HTTP headers, and so on. 

const { name } = require('ejs')
const express = require('express')
const app = express()

// app.get('/user/:id', (req, res) => {
//     res.send(`user: ${req.params.id}`)
//   })

//+++++++++++++++++++++++++++++++++++++Properties++++++++++++++++++++++++++++++++++++++++++++++
//req.app
// app.get('/viewdirectory', require('./mymiddleware.js'))

//req.baseUrl
// const greet = express.Router()
// greet.get('/en', (req, res) => {
//   console.log(req.baseUrl) // /greet
//   res.send('Hello!')
// })

// app.get('/jp', (req, res) => {
//   console.log(req.baseUrl) // /greet
//   res.send('Konichiwa!')
// })

// app.use('/greet', greet) // load the router on '/greet'


//req.body

// const bodyParser = require('body-parser')
// const multer = require('multer') // v1.0.5
// const { name } = require('ejs')
// const upload = multer() // for parsing multipart/form-data

// app.use(bodyParser.json()) // for parsing application/json
// app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

// app.get('/profile', upload.array(), (req, res, next) => {
//   console.log(req.body)
//   res.json(req.body)
// })


//req.cookies
// var cookieParser = require('cookie-parser')
// app.use(cookieParser())

// app.get('/', function (req, res) {
//   // Cookies that have not been signed
//   console.log('Cookies: ', req.cookies)

//   // Cookies that have been signed
//   console.log('Signed Cookies: ', req.signedCookies)
//     res.send('Hello World!')
// })


//req.fresh
//console.dir(req.fresh)

//req.host
//console.dir(req.host)


// req.hostname
console.dir(req.hostname)
// req.ip
console.dir(req.ip)
// req.ips
//When the trust proxy setting does not evaluate to false, this property contains an array of IP addresses specified in the X-Forwarded-For request header. Otherwise, it contains an empty array. This header can be set by the client or by the proxy.

// req.method Contains a string corresponding to the HTTP method of the request: GET, POST, PUT, and so on.

// req.originalUrl
console.dir(req.originalUrl)

// req.params
console.dir(req.params.name)
console.dir(req.params[0])

// req.path
console.dir(req.path)

// req.protocol
console.dir(req.protocol)

// req.query
const qs = require('qs')
app.set('query parser',
  (str) => qs.parse(str, { /* custom options */ }))

// req.res This property holds a reference to the response object that relates to this request object.
// req.route This property is an object containing properties mapped to the named route “parameters” (e.g. :name) if the route path includes them. If the route path does not contain any parameters, this property is an empty object.

// req.route
app.get('/user/:id?', (req, res) => {
    console.log(req.route)
    res.send('GET')
  })

// req.secure
req.protocol === 'https'

// req.signedCookies
console.dir(req.signedCookies.user)

// req.stale
console.dir(req.stale)

// req.subdomains
console.dir(req.subdomains)

// req.xhr
console.dir(req.xhr)


// ++++++++++++++++++++++++++++++++++++++++++++Methods+++++++++++++++++++++++++++++++++++++++++++++++
// req.accepts()
// Accept: text/html
req.accepts('html')
// => "html"

// Accept: text/*, application/json
req.accepts('html')
// => "html"
req.accepts('text/html')
// => "text/html"
req.accepts(['json', 'text'])
// => "json"
req.accepts('application/json')
// => "application/json"

// Accept: text/*, application/json
req.accepts('image/png')
req.accepts('png')
// => false

// Accept: text/*;q=.5, application/json
req.accepts(['html', 'json'])
// => "json"


// req.acceptsCharsets() Returns the first accepted charset of the specified character sets, based on the request’s Accept-Charset HTTP header field. If none of the specified charsets is accepted, returns false.


// req.acceptsEncodings() Returns the first accepted encoding of the specified encodings, based on the request’s Accept-Encoding HTTP header field. If none of the specified encodings is accepted, returns false.


// req.acceptsLanguages() Returns the first accepted language of the specified languages, based on the request’s Accept-Language HTTP header field. If none of the specified languages is accepted, returns false.


// req.get()
req.get('Content-Type')
// => "text/plain"

req.get('content-type')
// => "text/plain"

req.get('Something')
// => undefined


// req.is()
// With Content-Type: text/html; charset=utf-8
req.is('html') // => 'html'
req.is('text/html') // => 'text/html'
req.is('text/*') // => 'text/*'

// When Content-Type is application/json
req.is('json') // => 'json'
req.is('application/json') // => 'application/json'
req.is('application/*') // => 'application/*'

req.is('html')
// => false


// req.range()
// parse header from request
const range = req.range(1000)

// the type of the range
if (range.type === 'bytes') {
  // the ranges
  range.forEach((r) => {
    // do something with r.start and r.end
  })
}


app.listen(3000)