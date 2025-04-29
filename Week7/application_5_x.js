//  +++++++++++++++++++++++++++++++++++Properties+++++++++++++++++++++++++++++++++

//app.locals
/*
const express = require('express')
const app = express()
app.locals.title = 'My Express App'
app.locals.email= 'me@app.com'
app.get('/', (req, res) => {
    console.dir(app.locals.title)
    console.dir(app.locals.email)
  res.send('hello world')
})

app.listen(3000)
*/

//app.mountpath
/*
const express = require('express')

const app = express() // the main app
const admin = express() // the sub app

admin.get('/', (req, res) => {
  console.log(admin.mountpath) // /admin
  res.send('Admin Homepage')
})

app.use('/admin', admin) // mount the sub app
app.listen(3000)
*/

//app.router

/*
const express = require('express')
const app = express()
const router = app.router

router.get('/', (req, res) => {
  res.send('hello world')
})

app.listen(3000)
*/


// ++++++++++++++++++++++++++++++++++Methods++++++++++++++++++++++++++++++++
const express = require('express')
const app = express()
//app.all(path, callback [, callback ...])


// app.all('/secret', (req, res, next) => {
//     console.log('Accessing the secret section ...')
//     res.send('Accessing the secret section ...')
//     next() // pass control to the next handler
//   })



//app.delete(path, callback [, callback ...])

// app.delete('/', (req, res) => {
//     res.send('DELETE request to homepage')
//     console.log('DELETE request to homepage')
//   })


//app.disable(name)


// app.disable('trust proxy') //equal to app.set('trust proxy', false)
// app.get('trust proxy')


// //app.disabled(name)

// app.disabled('trust proxy')


// //app.enable(name)
// app.enable('trust proxy') //equal to app.set('trust proxy', true)
// app.get('trust proxy')

// //app.enabled(name)
// app.enabled('trust proxy')


// //app.get(name)
// app.get('title')

// //app.get(path, callback [, callback ...])
// app.get('/', (req, res) => {
//     res.send('GET request to homepage')
//   })

//app.listen(path, [callback])
// app.listen('/tmp/sock')

// //app.listen([port[, host[, backlog]]][, callback])
// app.listen(3000)

// //app.METHOD(path, callback [, callback ...])
// Routes an HTTP request, where METHOD is the HTTP method of the request, such as GET, PUT, POST, and so on, in lowercase. Thus, the actual methods are app.get(), app.post(), app.put(), and so on. 


//app.param

// app.param('id', (req, res, next, id) => {
//     console.log('the id is ' + id)
//     next()
//   }
//   )
//   app.get('/user/:id', (req, res, next) => {
//     console.log('although this matches')
//     next()
//   })
  
//   app.get('/user/:id', (req, res) => {
//     console.log('and this matches too')
//     res.end()
//   })

//app.path()

// const blog = express()
// const blogAdmin = express()

// app.use('/blog', blog)
// blog.use('/admin', blogAdmin)

// console.log(app.path()) // ''
// console.log(blog.path()) // '/blog'
// console.log(blogAdmin.path()) // '/blog/admin'

//app.post(path, callback [, callback ...])
// app.post('/', (req, res) => {
//     res.send('POST request to homepage')
//   })

//app.put(path, callback [, callback ...])
// app.put('/', (req, res) => {
//     res.send('PUT request to homepage')
//   })

// //app.render(view, [locals], callback)
// app.render('email', (_err, html) => {
//     // ...
//   })
  
//   app.render('email', { name: 'Tobi' }, (err, html) => {
//     // ...
//   })


//app.route(path)

// app.route('/events')
//   .all((req, res, next) => {
//     // runs for all HTTP verbs first
//     // think of it as route specific middleware!
//   })
//   .get((req, res, next) => {
//     res.json({})
//   })
//   .post((req, res, next) => {
//     // maybe add a new event...
//   })

//app.set(name, value)
//app.set('title', 'My Site')

//app.use([path,] callback [, callback...])
app.use((req, res, next) => {
  console.log('Time: %d', Date.now())
  res.send('hello world')
  next()
})


app.listen(3000)