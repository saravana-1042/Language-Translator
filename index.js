var express = require('express')
var app = express()

app.set('port', (process.env.PORT || 5000))
app.use(express.static(__dirname + '/public'))

app.get('/', function(request, response) {
  res.sentFile(path.join(__dirname,'public','index.html'));
})

app.get('/chat', function(request, response) {
  res.sentFile(path.join(__dirname,'public','chat.html'));
})

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})
