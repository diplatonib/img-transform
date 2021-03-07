//MODULES
let glob = require('glob');
let fs = require('fs');
let replace = require('replace');
// Find file(s)
glob('*.html', 
    function(err, files) {
        if (err) { throw err; }
        files.forEach(function(item, index, array) {
            console.log(item + ' found');
            // Read file
            console.log(fs.readFileSync(item, 'utf8'));

            let picture = document.createElement('PICTURE');
            const avifSource = document.createElement('SOURCE');
            avifSource.type="image/avif";
            const webpSource = document.createElement('SOURCE');
            webpSource.type="image/webp";
            let images = document.querySelectorAll('img');
            console.log(images);
            let imageSrc = images.forEach( 
                function(item){
                    if (item.hasAttribute('src') && item.parentNode.nodeName != 'PICTURE') {
                        const s = item.getAttribute('src');
                        if (s.match(/(.*\.png)|(.*\.jpg)/)) {
                            console.log('src object will be proceed');
                            //Берем путь
                            item.getAttribute('src');
                            console.log(item);
                            //Заменяем расширение
                            //Вписываем новые пути в сурсы
                            let avifSrcSet = s.replace( /(\.png)|(\.jpg)|(\.jpeg)/, '.avif' );
                            avifSource.srcset = avifSrcSet;
                            let webpSrcSet = s.replace( /(\.png)|(\.jpg)|(\.jpeg)/, '.webp' );
                            webpSource.srcset = webpSrcSet;
                            //Встраиваем готовые источники
                            item.insertAdjacentElement('afterEnd', picture);
                            picture.prepend(avifSource);
                            picture.appendChild(webpSource);
                            picture.appendChild(item);
                            console.log('Ready code:   ' + picture.outerHTML);
                        } else {
                            console.log('Can\'t find \'src\' attribute or unsupported file type');
                        }
                    } else if (item.hasAttribute('data-src') && item.parentNode.nodeName != 'PICTURE') {
                        const ds = item.getAttribute('data-src');
                        if (ds.match(/(.*\.png)|(.*\.jpg)/)) {
                            console.log('data-src object will be proceed');
                            console.log(item);
                        } else {
                            console.log('Can\'t find \'data-src\' attribute or unsupported file type');
                        }
                    } else if (item.parentNode.nodeName = 'PICTURE'){
                        console.log('Already done');
                        let log = item.parentNode.outerHTML;
                        console.log(log);
                    } else {
                        console.log('Something wrong');
                    }
                }
            );
        });
    }
);    