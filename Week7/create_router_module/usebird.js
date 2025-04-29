const express = require('express')
const app = express()
const port = 3000
const birds = require('./bird')

// ...

app.use('/bird', birds)
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })