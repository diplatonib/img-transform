module.exports.fromURL = filenameFromURL;

let fileNames = [];

function filenameFromURL(list) {
  require('fs')
  .readFileSync(list, 'utf-8')
  .split('\n')
  .forEach(getCurrentFilename)
  return fileNames;
}

function getCurrentFilename(line) { 
  fileNames.push(
    line.substring(line.lastIndexOf('/') + 1)
    .replace(/\.html|$/,'.twig')); 
}

function writeFiles(outputFile, content){
  require('fs')
  .writeFileSync(outputFile, content)
  console.log('Succeed!')
}

writeFiles('./files.txt', filenameFromURL('url-list.txt').join('\n') + '\n')
// console.log(filenameFromURL());
// console.log(fileNames);
