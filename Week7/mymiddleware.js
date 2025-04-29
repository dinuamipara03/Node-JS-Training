module.exports = function (options) {
    return function (req, res, next) {
        console.log('My middleware', options)
        res.send('Hello from my middleware')
      next()
    }
  } 
