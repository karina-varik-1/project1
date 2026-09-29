const fs = require('fs');
const textRef = 'txt/vanasonad.txt';

function showText(rawText){
	//console.log(rawText);
	//teeme tekstisk listi
	let folkWisdom = rawText.split(';');
	//console.log(folkWisdom);
	let vanasona = folkWisdom[Math.floor(Math.random() * folkWisdom.length)];
	return vanasona;
}

function readTextFile(reference){
	return new Promise((resolve, reject) => {
		fs.readFile(reference, 'utf8', (err, data) => {
			if(err){
				reject(err);
			} else {
				resolve(showText(data));
			}
		});
	});
}

module.exports = readTextFile;
