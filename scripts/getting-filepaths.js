module.exports.readPaths = readPaths;


const config = {
  fileType: /\.html/,
  folderName: './test/',
  encode: 'utf-8',
  contentType: 'text/html',
  URL: 'url-list.txt',
}




let fileNames = [];

function readPaths (err, pagesList) {
  require('fs')
  .readFile(pagesList, config.encode)
  .split('\n')
  .forEach(getCurrentFilename)
  return fileNames;
}

function getCurrentFilename(line) { 
  fileNames.push(
    line.substring(line.lastIndexOf('/') + 1)
    .replace(/\.html|$/,'.twig')); 
}

readPaths(config.URL);
console.log(fileNames);



// function filter (err, allFilesInFolders) {
//   if(err){ throw err; }
//   allFilesInFolders.forEach( function (file) {
//     file.match(
//       readPaths(config.URL).forEach( function (subString) {
//       return subString;
//       })
//     )   
//   })
//   // readFiles();
// }
// module.exports.filter = filter;



// console.log( config.URL );

// let filePaths = [];

// function findFiles () {
//   let childProcess = require('child_process');

//   fileNames.forEach( function(file){
//     childProcess.execFile('find', [ config.folderName, '-type', 'f', '-name', file], function(err, stdout, stderr){
//       if (err) { throw err } 
//       filePaths.push(stdout);
//     })
//   })
// }

// console.log(filePaths);

