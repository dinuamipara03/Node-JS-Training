// Application-level middleware
// Application-level middleware are bound to an instance of express() using app.use() and app.METHOD() functions. They are executed for every request to the app.

const express = require('express')
const app = express()
const port = 3000
// app.use('/user/:id', (req, res, next) => {
//     console.log('Request Type:', req.method)
//     res.send('USER')
//     next()
//   })
app.use('/user/:id', (req, res, next) => {
    console.log('Request URL:', req.originalUrl)
    res.send('USER')
    next()
  }, (req, res, next) => {
    console.log('Request Type:', req.method) 
    next()
  })
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  }
)





// Router-level middleware
// Router-level middleware works in the same way as application-level middleware, but it is bound to an instance of express.Router().

const express = require('express')
const app1 = express()
const router = express.Router()

router.use((req, res, next) => {
  console.log('Time:', Date.now())
  next()
})

router.use('/user/:id', (req, res, next) => {
  console.log('Request URL:', req.originalUrl)
  next()
}, (req, res, next) => {
  console.log('Request Type:', req.method)
  next()
})

router.get('/user/:id', (req, res, next) => {
  if (req.params.id === '0') next('route')
  else next()
}, (req, res, next) => {
  res.render('regular')
})

router.get('/user/:id', (req, res, next) => {
  console.log(req.params.id)
  res.render('special')
})
app1.use('/', router)




// Error-handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).send('Something broke!')
  })



// Built-in middleware
// Express has the following built-in middleware functions:
// express.static serves static assets such as HTML files, images, and so on.
// express.json parses incoming requests with JSON payloads. NOTE: Available with Express 4.16.0+
// express.urlencoded parses incoming requests with URL-encoded payloads. NOTE: Available with Express 4.16.0+




// Third-party middleware
// Use third-party middleware to add functionality to Express apps.

const express = require('express')
const app2 = express()
const cookieParser = require('cookie-parser')

// load the cookie-parsing middleware
app2.use(cookieParser())
