import { basename } from 'path';

const path = require('path');
const fs = require('fs');
const directoryPath = path.join(__dirname);

const files = fs.readdirSync(directoryPath, function(err, files) {
	if (err) {
		return console.log('Unable to scan directory: ' + err);
	}
});

const filteredFiles = files.filter(file => {
	const currentFilePath = __filename.split('/');
	const currentFileName = currentFilePath[currentFilePath.length - 1];
	return file.slice(-3) === '.js' && file !== currentFileName;
});

export default filteredFiles.reduce((prev, current) => {
	const modalName = current.toString('').slice(0, -3);
	return {
		...prev,
		[modalName]: require(`./${current.toString()}`)
	};
}, {});
