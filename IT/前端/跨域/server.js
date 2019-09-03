// server.js
let express = require('express')
var path = require('path')
var favicon = require('serve-favicon')

let app = express()

app.get('/say', function (req, res) {
	let { wd, callback } = req.query
	console.log(wd) // Iloveyou
	console.log(callback) // show
	res.end(`${callback}('我不爱你')`)
})

app.use(favicon(path.join(__dirname, './public', 'favicon.ico')))

app.listen(3000)
