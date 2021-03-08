// Checking arguments
//'process' is a current running process, 'argv' is a arguments values
// let args = process.argv;
// console.log(args);
// if (args.length <= 2) {
// 	console.log('Usage:	', __filename, 'path/to/file');
// 	process.exit(-1);
// }

/*
* Explores recursively a directory and returns all the filepaths and folderpaths in the callback.
* @see http://stackoverflow.com/a/5827895/4241030
* @param {String} dir
* @param {Function} done
*/

// function filewalker(dir, done) {

// 	let results = [];

// 	fs.readdir(dir, function(err, list) {
// 		if (err) return done(err);

// 		var pending = list.length;

// 		if (!pending) return done(null, results);
// 		list.forEach(function(file){
// 			file = path.resolve(dir, file);
// 			fs.stat(file, function(err, stat){
// 		// If directory, execute a recursive call
// 		if (stat && stat.isDirectory()) {
// 			// Add directory to array [comment if you need to remove the directories from the array]
// 			// results.push(file);
// 			filewalker(file, function(err, res){
// 				results = results.concat(res);
// 				if (!--pending) done(null, results);
// 			});
// 		} else {
// 			results.push(file);
// 			if (!--pending) done(null, results);
// 		}
// 	});
// 		});
// 	});
// };

// filewalker("./test", function(err, data){
// 	if(err){
// 		throw err;
// 	}
// // ["c://some-existent-path/file.txt","c:/some-existent-path/subfolder"]
// 	console.log('All files array:\n', data);

// 	let filteredResults = [];
// 	data.filter(function (item) {
// 		if ( new RegExp (/\.twig/).test(item)) {
// 			console.log('Current file:    ', item);
// 			filteredResults.push(item);
// 		}
// 	});

// 	console.log('Filtered array:\n', filteredResults);
// });
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
}
const readPaths = require('./scripts/getting-filepaths.js')
// const util = require('util')



function filewalker(dir, done) {

	let results = [];

	fs.readdir(dir, function(err, list) {
		if (err) return done(err);

		var pending = list.length;

		if (!pending) return done(null, results);
		list.forEach(function(file){
			file = path.resolve(dir, file);
			fs.stat(file, function(err, stat){
		// If directory, execute a recursive call
		if (stat && stat.isDirectory()) {
			filewalker(file, function(err, res){
				results = results.concat(res);
				if (!--pending) done(null, results);
			});
		} else {
			if ( settings.fileType.test(file)) {
				results.push(file);
			}
			if (!--pending) done(null, results);
		}
	});
		});
	});
};

// function readAll (files) {

// 	let arr = [];

// 	files.forEach((item) => {
// 		fs.readFile(files, 'utf-8'); 
// 		arr.push(files);
// 	})
// 	for (var i = 0; i < 9; i++) {
//    		console.log(i);
//    		fs.readFile(files, 'utf-8'); 
// 		arr.push(files);
// 	}
// 	console.log('Result:', arr);
// };

// Usage fs module
// fs.readFile(path, encode, func);

function createDOM(err, fileContent){
	if(err){ throw err; }
	console.log('------------------------start------------------------')
	console.log('Current item:\n', fileContent);
	
	let dom = new JSDOM(fileContent);
	// let sources = [];
	let images = dom.window.document.querySelectorAll('img');
	let arr = Array.from(images);
	// arr.forEach( function(element, index) {
	// 	element.getAttribute('src');
	// 	console.log(index,' Current img: ', element.src )
	// });
	arr.forEach( 
		function(item, iter){
			if (item.hasAttribute('src') && item.parentNode.nodeName != 'PICTURE') {
				const s = item.getAttribute('src');
				if (s.match(/(.*\.png)|(.*\.jpg)/)) {
					console.log('####### IMAGE #' + (iter + 1) + ' INFO #######')
					console.log('Image #' + (iter + 1) + ' \'src\' attribute will be proceed.');
					console.log('Element:\n' + '\n' + item.outerHTML);
					console.log('DocumentIndex [' + iter + ']');
					let picture = dom.window.document.createElement('PICTURE');
					let avifSource = dom.window.document.createElement('SOURCE');
					avifSource.type="image/avif";
					let webpSource = dom.window.document.createElement('SOURCE');
					webpSource.type="image/webp";
                //Буфер для новых элементов
                let df = dom.window.document.createDocumentFragment();
                //Берем путь                     
                //Заменяем расширение
                //Вписываем новые пути в сурсы
                let avifSrcSet = s.replace( /(\.png)|(\.jpg)|(\.jpeg)/, '.avif' );
                avifSource.srcset = avifSrcSet;
                let webpSrcSet = s.replace( /(\.png)|(\.jpg)|(\.jpeg)/, '.webp' );
                webpSource.srcset = webpSrcSet;
                //Находим индекс в массиве соседей и предка для текущего элемента
                const parent = item.parentNode;
                console.log('ParentNode:\n', parent);
                const index = Array.from(item.parentNode.children).indexOf(item);
                console.log('ChildNodeIndex [' + index + ']');
                //Встраиваем готовые источники
                picture.appendChild(avifSource);
                picture.appendChild(webpSource);
                picture.appendChild(item);
                df.appendChild(picture);
                parent.insertBefore(df, parent.children[index]);
                console.log('Code result:\n' + '\n' + picture.outerHTML);
            } else {
            	console.log('Can\'t find \'src\' attribute or unsupported file type');
            }
        } else if (item.hasAttribute('data-src') && item.parentNode.nodeName != 'PICTURE') {
        	const ds = item.getAttribute('data-src');
        	if (ds.match(/(.*\.png)|(.*\.jpg)/)) {
        		console.log('####### IMAGE #' + (iter + 1) + ' INFO #######')
        		console.log('Image #' + (iter + 1) + ' \'data-src\' attribute will be proceed.');
        		let picture = dom.window.document.createElement('PICTURE');
        		let avifSource = dom.window.document.createElement('SOURCE');
        		avifSource.type="image/avif";
        		let webpSource = dom.window.document.createElement('SOURCE');
        		webpSource.type="image/webp";
                //Буфер для новых элементов
                let df = dom.window.document.createDocumentFragment();
                //Берем путь                     
                //Заменяем расширение
                //Вписываем новые пути в сурсы
                let avifSrcSet = ds.replace( /(\.png)|(\.jpg)|(\.jpeg)/, '.avif' );
                avifSource.srcset = avifSrcSet;
                let webpSrcSet = ds.replace( /(\.png)|(\.jpg)|(\.jpeg)/, '.webp' );
                webpSource.srcset = webpSrcSet;
                //Меняем data-src на src
                item.src = ds;
                item.removeAttribute('data-src');
                console.log('Element (data-src attribute replaced):\n' + '\n' + item.outerHTML);
                console.log('DocumentIndex [' + iter + ']');    
                //Находим индекс в массиве соседей и предка для текущего элемента
                const parent = item.parentNode;
                console.log('ParentNode:\n', parent);
                const index = Array.from(item.parentNode.children).indexOf(item);
                console.log('ChildNodeIndex [' + index + ']');
                //Встраиваем готовые источники
                picture.appendChild(avifSource);
                picture.appendChild(webpSource);
                picture.appendChild(item);
                df.appendChild(picture);
                parent.insertBefore(df, parent.children[index]);
                console.log('Code result:\n' + '\n' + picture.outerHTML); 
            } else {
            	console.log('Can\'t find \'data-src\' attribute or unsupported file type');
            }
        } else if (item.parentNode.nodeName = 'PICTURE'){
        	console.log('####### IMAGE #' + (iter + 1) + ' INFO #######')
        	console.log('Already done. Image #' + (iter + 1) + ' has been changed before.');
        	console.log('Image #' + (iter + 1) + '\'src\' attribute will NOT be proceed.');
        	console.log('DocumentArrayIndex [' + iter + ']');
        	console.log('Element:');
        	console.log(item.outerHTML);
        	console.log('ParentNode:');
        	console.log(item.parentNode);
             //Находим индекс в массиве соседей и предка для текущего элемента
             const index = Array.from(item.parentNode.children).indexOf(item);
             console.log('ChildNodeIndex [',index,']');
             let log = item.parentNode.outerHTML;
             console.log('Source code:');
             console.log(log);
         } else {
         	console.log('Something wrong');
         }
     }
     );

	// sources.push(images)
	console.log('Current src: ', images.length);

	// console.log(util.inspect(sources, {showHidden: true, depth: null}))
	// alternative shortcut
	// console.log(util.inspect(myObject, false, null, true /* enable colors */))
	// if (sources.length > 0) {
	// 	sources.forEach( function(element, index) {
	// 		console.log(element, indexs)
	// 	});
	// }
	console.log(dom.window.document.body.innerHTML)
	return dom.window.document.body.innerHTML
	console.log('-------------------------end-------------------------')
}

function filter (err, allFilesInFolders) {
	if(err){ throw err; }
	allFilesInFolders.forEach( function (file) {
		file.match(
			readPaths(settings.URL).forEach( function (subString) {
			return subString;
			})
		)		
	})
	readFiles();
}

function readFiles(err, fileContent){
	if(err){ throw err; }
	console.log('All files array:\n', fileContent);
	fileContent.forEach( function(element, index) {
		fs.readFile(element, settings.encode, createDOM);
		console.log(element, index);
		
	});
}

function writeFiles(err, fileContent){
	if(err){ throw err;	}
	console.log('Markup result:\n', fileContent);
	fileContent.forEach( function(element, index) {
		fs.writeFile('./test/out.html', readFiles)
	});
}


// filewalker( settings.folderName, readFiles);

filewalker( settings.folderName, readFiles);




