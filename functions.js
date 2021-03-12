const fs = require('fs');
const path = require('path');

function determineContentType(path) {
	if (path.includes('.js')) {
		return { 'Content-Type': 'text/javascript' };
	} else if (path.includes('.css')) {
		return { 'Content-Type': 'text/css' };
	} else {
		return { 'Content-Type': 'text/html' };
	}
}

function getFile(path) {
	return new Promise((resolve, reject) => {
		fs.readFile(path, 'utf8', (err, data) => {
			if (err) {
				reject(err);
			} else {
				resolve(data);
			}
		});
	});
}

async function router(req, res) {
	if (req.url === '/') {
		res.end(await getFile(path.join(__dirname, 'html', 'index.html')));
	} else if (req.url === '/login') {
		res.end(await getFile(path.join(__dirname, 'html', 'login.html')));
	} else if (req.url === '/register') {
		res.end(await getFile(path.join(__dirname, 'html', 'register.html')));
	} else if (req.url === '/about') {
		res.end(await getFile(path.join(__dirname, 'html', 'about.html')));
	} else if (req.url === '/contact') {
		res.end(await getFile(path.join(__dirname, 'html', 'contact.html')));
	} else if (req.url === '/app.js') {
		res.end(await getFile(path.join(__dirname, 'scripts', 'app.js')));
	} else if (req.url === '/styles.css') {
		res.end(await getFile(path.join(__dirname, 'styles', 'styles.css')));
	}
}

module.exports = {
	determineContentType,
	getFile,
	router
};
