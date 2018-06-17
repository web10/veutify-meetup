var express = require('express')
var path = require('path')
var serveStatic = require('serve-static')

app = express()
app.use(serveStatic(__dirname + "/dist"))
var port = process.env.PORT || 4000
app.listen(port)
console.log('Server Started ' + port)