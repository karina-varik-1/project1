const http = require('http');
const dateTimeET = require('./src/dateTimeET');
const pageHead = '<!DOCTYPE html>\n<html lang="et">\n<head>\n\t<meta charset="utf-8">\n\t<title>Karina Varik, veevbiprogrammeerimine</title>\n</head>\n<body>\n';
const pageBody = '\t<meta charset="utf-8">\n\t<h1>Karina Varik, veebiprogrammeerimine</h1>\n\t <p>See leht on loodud veebiprogrammeerimise kursusel <a href="https://www.tlu.ee">Tallinna Ülikoolis</a> ning ei sislda tõsiseltvõetavat sisu!</p>\n\t<p>Esialgu tutvusime lihtsalt HTML keelega, peatselt programmeerime.</p>\n\t<hr>';
const pageFoot = '\n</body>\n</html>';


http.createServer(function(req, res){
	res.writeHead(200, {"Content-type": "text/html"});
	res.write(pageHead);
	res.write(pageBody);
	res.write('<p>Nädalapäev: ' + dateTimeET.weekday() + '</p>');
	res.write('<p>Täna on ' + dateTimeET.date() + '.<p>');
	res.write('<p>Kellaaeg: ' + dateTimeET.time() + '<p/>');
	res.write(pageFoot);
	return res.end();
}).listen(5299);
