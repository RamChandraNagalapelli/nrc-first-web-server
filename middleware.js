var middleware = {
	logger: function(req, res, next) {
		console.log('\n', {
			Request: req.method + ' ' + req.originalUrl,
			At: new Date().toString()
		}, '\n');
		next();
	}
}

module.exports = middleware