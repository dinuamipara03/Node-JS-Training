const mw = require('./mymiddleware.js')
const express = require('express')
const app = express()
const port = 3000
app.use(mw({ option1: '1', option2: '2' }))
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
    }) 
