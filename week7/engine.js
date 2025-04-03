//app.engine(ext, callback)
const express = require('express')
const app = express()

app.engine('html', require('ejs').renderFile);

app.get('/api', function (req, res) {
   res.render("api.html")
});

app.listen(3000)