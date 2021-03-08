module.exports.readPaths = readPaths;

const settings = {
  fileType: /\.html/,
  folderName: './test/',
  encode: 'utf-8',
  contentType: 'text/html',
  URL: 'url-list.txt',
}

let fileNames = [];

function readPaths (pagesList) {
  require('fs')
  .readFileSync(pagesList, "utf-8")
  .split('\n')
  .forEach(getCurrentFilename)
  return fileNames;
}

function getCurrentFilename(line) { 
  fileNames.push(
    line.substring(line.lastIndexOf('/') + 1)
    .replace(/\.html|$/,'.twig')); 
}

// console.log( settings.URL );

// let filePaths = [];

// function findFiles () {
//   let childProcess = require('child_process');

//   fileNames.forEach( function(file){
//     childProcess.execFile('find', [ settings.folderName, '-type', 'f', '-name', file], function(err, stdout, stderr){
//       if (err) { throw err } 
//       filePaths.push(stdout);
//     })
//   })
// }

// console.log(filePaths);

