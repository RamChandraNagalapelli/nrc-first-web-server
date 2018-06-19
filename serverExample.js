var express = require('Express');
var app = express();

var middleware = require('./middleware.js');

app.use(middleware.logger);

app.get("/name", function(req, res) {
	res.send({"name": "ramchandra"});
});

app.listen(3000, function() {
	console.log('port started at ', 3000);
});