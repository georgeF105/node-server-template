var express = require('express')
var app = express()
var path = require('path')

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.get('/', function (req, res) {
  res.render('homePage',{message:"homepage test message"})
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})