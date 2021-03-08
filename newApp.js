const fs = require('fs');
const path = require('path');
const jsdom = require("jsdom");
//Creating new JSDOM object
const { JSDOM } = jsdom;

const settings = {
  fileType: /\.twig/,
  folderName: './test/',
  encode: 'utf-8',
  contentType: 'text/html',
  URL: 'url-list.txt',
}

const filter = require('./scripts/toFileNames.js');

var filewalker = require('filewalker');

filewalker(settings.folderName)
  .on('dir', function(p) {
    filewalker('dir');
  })
  .on('file', function(p, s) {
    console.log('file: %s, %d bytes', p, s.size);
  })
  .on('error', function(err) {
    console.error(err);
  })
  .on('done', function() {
    console.log('%d dirs, %d files, %d bytes', this.dirs, this.files, this.bytes);
  })
.walk();