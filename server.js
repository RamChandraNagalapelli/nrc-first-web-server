var express = require('express');
var app = express();

var middleWare = {
	logger: function(req, res, next) {
		console.log({
			Request: req.method + ' ' + req.originalUrl,
			At: new Date().toString()
		});
		next();
	}
}

/*app.get('/', function(req, res) {
	res.send('Hello Express!!!!');
});*/

app.use(middleWare.logger);

app.get('/about', function(req, res) {
	res.send('Hello world!!!!');
});

app.use(express.static(__dirname + '/Public'));

var PORT = 3000;
// console.log('server started with port: ' + server_port);
app.listen(PORT, function() {
	console.log('express server started!\nport: ' + PORT);
});