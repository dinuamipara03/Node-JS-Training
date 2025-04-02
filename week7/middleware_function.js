// const myLogger = function (req, res, next) {
//   console.log('LOGGED')
//   next()
// }



// const express = require('express')
// const app = express()

// const myLogger = function (req, res, next) { 
//   console.log('LOGGED')
//   next()
// }

// app.use(myLogger)

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

// app.listen(3000)


// const requestTime = function (req, res, next) {
//     req.requestTime = Date.now()
//     next()
//   }


// const requestTime = function (req, res, next) {
//   req.requestTime = Date.now()
//   next()
// }

// app.use(requestTime)

// app.get('/', (req, res) => {
//   let responseText = 'Hello World!<br>'
//   responseText += `<small>Requested at: ${req.requestTime}</small>`
//   res.send(responseText)
// })

// app.listen(3000)



// // async function cookieValidator (cookies) {
// //     try {
// //       await externallyValidateCookie(cookies.testCookie)
// //     } catch {
// //       throw new Error('Invalid cookies')
// //     }
// //   }


const express = require('express')
const cookieParser = require('cookie-parser')
const cookieValidator = require('cookie-validator')

const app = express()

async function validateCookies (req, res, next) {
  await cookieValidator(req.cookies)
  next()
}

app.use(cookieParser())

app.use(validateCookies)

// error handler
app.use('/',(req, res) => {
  res.send('Invalid cookies')

})

app.listen(3333)
