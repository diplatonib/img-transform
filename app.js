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

const fs = require('fs');
const path = require('path');
const jsdom = require("jsdom");
//Creating new JSDOM object
const { JSDOM } = jsdom;
const chalk = require('chalk');
const prependFile = require('prepend-file');


const settings = {
  fileType: /\.html/,
  folderName: './test/speedtest/',
  encode: 'utf-8',
  contentType: 'text/html',
  URL: 'url-list.txt',
  FWOutput: 'filewalker.txt',
  imagesList: 'images-list.txt',
}

//const oversized = require('./scripts/toFileNames.js')

// const utils = require('./scripts/getting-filepaths.js')
function checkArray (array) {
    if (Array.isArray(array)) {
        console.log(chalk.blue('Yes this is array')); 
    } else {
        console.log(chalk.red('Not array'));
    }
}

function writeFilewalkerResultFile(err, array){
  if(err){ throw err; }
  array = array.join('\n');
  // console.log(array)  
  // checkArray (array)
  fs.writeFileSync(settings.FWOutput, array);
  console.log(chalk.green(`Wrote sucsessfully in ${path.resolve(settings.FWOutput)}`));
  let res = function(err) {
    if(err) throw error; // если возникла ошибка
    console.log("Read & check. File contents:");
    let data = fs.readFileSync(settings.FWOutput, "utf8")
    console.log(data);  // выводим считанные данные
  }
  prependFile(settings.FWOutput, 'Files to be proceed:\n');
  return res();

}                       

function filewalker(dir, done, write) {
    let filewalkerResults = [];
    fs.readdir(dir, function(err, list) {
        if (err) return done(err);
        var pending = list.length;
        if (!pending) return done(null, filewalkerResults);
        list.forEach(function(file){
            file = path.resolve(dir, file);
            fs.stat(file, function(err, stat){
                // If directory, execute a recursive call
                if (stat && stat.isDirectory()) {
                    filewalker(file, function(err, res){
                        filewalkerResults = filewalkerResults.concat(res);
                        if (!--pending) done(null, filewalkerResults);
                    });
                } else {
                    if ( settings.fileType.test(file)) {
                        filewalkerResults.push(file);
                    }
                    if (!--pending) {
                        
                        done(null, filewalkerResults);
                    }
                }
            });
        });
    });
}



function createDOM(err, fileContent) {
    if (err) { throw err; }
    console.log('------------------------start------------------------')
    // console.log('Current item:\n', fileContent);

    let dom = new JSDOM(fileContent);
    // let sources = [];
    let imagesNodeList = dom.window.document.querySelectorAll('img');


    function writeImagesPathsResultFile(err, paths) {
         if (err) { throw err; }
        fs.writeFileSync(settings.imagesList, 'Files to be proceed:\n');
        fs.appendFileSync( settings.imagesList, paths, (err) => {
            if (err) throw err;
            console.log('The "data to append" was appended to file!');
        } );

        console.log(chalk.green(`Wrote sucsessfully in ${path.resolve(settings.imagesList)}`));
        let res = function(err) {
            if (err) throw error; // если возникла ошибка
            console.log("Read & check. File contents:");
            let data = fs.readFileSync(settings.imagesList, "utf8")
            console.log(data); // выводим считанные данные
        }
        return res();
    }

    let imagesPathsResolve = srcArray => {
        let imagesResolvedPaths = [];
        let resolvePaths = function(src) {
            let resolved = path.resolve(src.replace(/^\//, ''));
            console.log(chalk.yellow(resolved));
            // return imagesResolvedPaths.push(resolved);

        }

        let checkSource = item => {
            item.match(/(.*\.png$)|(.*\.jpg$)/);
            return true;
        }

        srcArray.forEach(function getImagePath(imgItemOfImages) {
            if (imgItemOfImages.hasAttribute('src') && imgItemOfImages.parentNode.nodeName != 'PICTURE') {
                let s = imgItemOfImages.getAttribute('src');
                if (checkSource(s)) {
                    resolvePaths(s);
                }
            } else if (imgItemOfImages.hasAttribute('data-src') && imgItemOfImages.parentNode.nodeName != 'PICTURE') {
                let d = imgItemOfImages.getAttribute('data-src')
                if (checkSource(d)) {
                    resolvePaths(d);
                }
            }
        })
        return imagesResolvedPaths;
    };

    let imagesPaths = imagesPathsResolve(imagesNodeList);

    writeImagesPathsResultFile(imagesPaths);

    checkArray(imagesPaths);
    Array.from(imagesPaths);
    console.log(`Input to compresss ${imagesPaths}`);

    // imagesNodeList.forEach( 
    //  function transformDOM (item, iter){
    //      if (item.hasAttribute('src') && item.parentNode.nodeName != 'PICTURE') {
    //          const s = item.getAttribute('src');
    //          if (s.match(/(.*\.png)|(.*\.jpg)/)) {
    //              console.log('####### IMAGE #' + (iter + 1) + ' INFO #######')
    //              console.log('Image #' + (iter + 1) + ' \'src\' attribute will be proceed.');
    //              console.log('Element:\n' + '\n' + item.outerHTML);
    //              console.log('DocumentIndex [' + iter + ']');
    //              let picture = dom.window.document.createElement('PICTURE');
    //              let avifSource = dom.window.document.createElement('SOURCE');
    //              avifSource.type="image/avif";
    //              let webpSource = dom.window.document.createElement('SOURCE');
    //              webpSource.type="image/webp";
    //                //Буфер для новых элементов
    //                let df = dom.window.document.createDocumentFragment();
    //                //Берем путь                     
    //                //Заменяем расширение
    //                //Вписываем новые пути в сурсы
    //                let avifSrcSet = s.replace( /(\.png)|(\.jpg)|(\.jpeg)/, '.avif' );
    //                avifSource.srcset = avifSrcSet;
    //                let webpSrcSet = s.replace( /(\.png)|(\.jpg)|(\.jpeg)/, '.webp' );
    //                webpSource.srcset = webpSrcSet;
    //                //Находим индекс в массиве соседей и предка для текущего элемента
    //                const parent = item.parentNode;
    //                console.log('ParentNode:\n', parent);
    //                const index = Array.from(item.parentNode.children).indexOf(item);
    //                console.log('ChildNodeIndex [' + index + ']');
    //                //Встраиваем готовые источники
    //                picture.appendChild(avifSource);
    //                picture.appendChild(webpSource);
    //                picture.appendChild(item);
    //                df.appendChild(picture);
    //                parent.insertBefore(df, parent.children[index]);
    //                console.log('Code result:\n' + '\n' + picture.outerHTML);
    //            } else {
    //              console.log('Can\'t find \'src\' attribute or unsupported file type');
    //            }
    //        } else if (item.hasAttribute('data-src') && item.parentNode.nodeName != 'PICTURE') {
    //          const ds = item.getAttribute('data-src');
    //          if (ds.match(/(.*\.png)|(.*\.jpg)/)) {
    //              console.log('####### IMAGE #' + (iter + 1) + ' INFO #######')
    //              console.log('Image #' + (iter + 1) + ' \'data-src\' attribute will be proceed.');
    //              let picture = dom.window.document.createElement('PICTURE');
    //              let avifSource = dom.window.document.createElement('SOURCE');
    //              avifSource.type="image/avif";
    //              let webpSource = dom.window.document.createElement('SOURCE');
    //              webpSource.type="image/webp";
    //                //Буфер для новых элементов
    //                let df = dom.window.document.createDocumentFragment();
    //                //Берем путь                     
    //                //Заменяем расширение
    //                //Вписываем новые пути в сурсы
    //                let avifSrcSet = ds.replace( /(\.png)|(\.jpg)|(\.jpeg)/, '.avif' );
    //                avifSource.srcset = avifSrcSet;
    //                let webpSrcSet = ds.replace( /(\.png)|(\.jpg)|(\.jpeg)/, '.webp' );
    //                webpSource.srcset = webpSrcSet;
    //                //Меняем data-src на src
    //                item.src = ds;
    //                item.removeAttribute('data-src');
    //                console.log('Element (data-src attribute replaced):\n' + '\n' + item.outerHTML);
    //                console.log('DocumentIndex [' + iter + ']');    
    //                //Находим индекс в массиве соседей и предка для текущего элемента
    //                const parent = item.parentNode;
    //                console.log('ParentNode:\n', parent);
    //                const index = Array.from(item.parentNode.children).indexOf(item);
    //                console.log('ChildNodeIndex [' + index + ']');
    //                //Встраиваем готовые источники
    //                picture.appendChild(avifSource);
    //                picture.appendChild(webpSource);
    //                picture.appendChild(item);
    //                df.appendChild(picture);
    //                parent.insertBefore(df, parent.children[index]);
    //                console.log('Code result:\n' + '\n' + picture.outerHTML); 
    //            } else {
    //              console.log('Can\'t find \'data-src\' attribute or unsupported file type');
    //            }
    //        } else if (item.parentNode.nodeName = 'PICTURE'){
    //          console.log('####### IMAGE #' + (iter + 1) + ' INFO #######')
    //          console.log('Already done. Image #' + (iter + 1) + ' has been changed before.');
    //          console.log('Image #' + (iter + 1) + '\'src\' attribute will NOT be proceed.');
    //          console.log('DocumentArrayIndex [' + iter + ']');
    //          console.log('Element:');
    //          console.log(item.outerHTML);
    //          console.log('ParentNode:');
    //          console.log(item.parentNode);
    //             //Находим индекс в массиве соседей и предка для текущего элемента
    //             const index = Array.from(item.parentNode.children).indexOf(item);
    //             console.log('ChildNodeIndex [',index,']');
    //             let log = item.parentNode.outerHTML;
    //             console.log('Source code:');
    //             console.log(log);
    //         } else {
    //          console.log('Something wrong');
    //         }
    //     }
    //     );

    // sources.push(images)
    console.log('Current page src\'s: ', imagesNodeList.length);

    // console.log(util.inspect(sources, {showHidden: true, depth: null}))
    // alternative shortcut
    // console.log(util.inspect(myObject, false, null, true /* enable colors */))
    // if (sources.length > 0) {
    //  sources.forEach( function(element, index) {
    //      console.log(element, indexs)
    //  });
    // }
    // console.log(dom.window.document.body.innerHTML)
    // return dom.window.document.body.innerHTML
    console.log('-------------------------end-------------------------')
}

function readFiles(err, fileContent){
	if(err){ throw err; }
	console.log('All files array:\n', fileContent);
	fileContent.forEach( function(element, index) {
        console.log('File:', element);
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


filewalker( settings.folderName, writeFilewalkerResultFile);
filewalker( settings.folderName, readFiles);




// function pushToArray(err, files) {
	
// 	if(err){ throw err; } 

// 	let allFiles = [];

// 	files.forEach( function(el, i){
// 		allFiles.push(el);
// 	}) 
// 	return allFiles;
// } 

// let arr1 = allF;


// console.log(filewalker( settings.folderName, arr1))
// console.log(arr1)