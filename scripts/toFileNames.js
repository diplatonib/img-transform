 
let fileNames = [];
	
function toFileNames(pagesList) {
	require('fs')
	.readFileSync(pagesList, 'utf-8')
	.split('\n')
	.forEach(getCurrentFilename);
}

function getCurrentFilename(line) { 
	fileNames.push(
		line.substring(line.lastIndexOf('/') + 1)
		.replace(/\.html|$/,'.twig')
		); 
}
 
function filter (err, allFilesInFolders) {
	if(err){ throw err;	}
	allFilesInFolders.forEach( function (file) {
		file.match(
			readPaths(settings.URL).forEach( function (subString) {
				return subString
			})
		)   
	});
}

module.exports.filter = filter; 