const http = require('http');
const functions = require('./functions');
const PORT = 3000;

const server = http.createServer(async (req, res) => {
	res.writeHead(200, functions.determineContentType(req.url));
	functions.router(req, res);
});

server.listen(process.env.PORT, () => {
	console.log('>>> Server Started <<<');
});
