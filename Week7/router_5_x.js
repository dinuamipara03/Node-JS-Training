// A router object is an instance of middleware and routes. 
/*
outer.use((req, res, next) => {
  // .. some logic here .. like any other middleware
  next()
})

// will handle any request that ends in /events
// depends on where the router is "use()'d"
router.get('/events', (req, res, next) => {
  // ..
})
*/

// +++++++++++++++++++++++++++++++++Methods++++++++++++++++++++++++++++++++++

const express = require('express');

const app = express();

const router = express.Router();
const PORT = 3000;


// router.all()
router.all('/user', function (req, res) {
console.log("Home Page is called");
res.send('Hello World');
});



// router.METHOD()
router.get('/api', function (req, res, next) {
   console.log("GET request called for endpoint: %s", req.path);
   res.end();
});


// router.param()

router.param('id', (req, res, next, id) => {
    console.log('CALLED ONLY ONCE')
    next()
  })
  
  router.get('/user/:id', (req, res, next) => {
    console.log('although this matches')
    next()
  })
  
  router.get('/user/:id', (req, res) => {
    console.log('and this matches too')
    res.end()
  })

// router.route()
router.route('/data')
.get(function (req, res, next) {
   console.log("GET request - /data endpoint is called");
   res.end();
});


// router.use()
router.use((req, res, next) => {
    console.log('%s %s %s', req.method, req.url, req.path)
    next()
  })
  
  // this will only be invoked if the path starts with /bar from the mount point
  router.use('/bar', (req, res, next) => {
    // ... maybe some additional /bar logging ...
    next()
  })
  
  // always invoked
  router.use((req, res, next) => {
    res.send('Hello World')
  })
  



  

app.use(router);

app.listen(PORT, function(err){
   if (err) console.log(err);
   console.log("Server listening on PORT", PORT);
});