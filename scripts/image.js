//MODULES
//let glob = require('glob');
//let fs = require('fs');
//let replace = require('replace');


let images = document.querySelectorAll('img');
//console.log(images);
let imageSrc = images.forEach( 
    function(item, iter){
        if (item.hasAttribute('src') && item.parentNode.nodeName != 'PICTURE') {
            const s = item.getAttribute('src');
            if (s.match(/(.*\.png)|(.*\.jpg)/)) {
                console.log('####### IMAGE #' + (iter + 1) + ' INFO #######')
                console.log('Image #' + (iter + 1) + ' \'src\' attribute will be proceed.');
                console.log('Element:\n' + '\n' + item.outerHTML);
                console.log('DocumentIndex [' + iter + ']');
                let picture = document.createElement('PICTURE');
                let avifSource = document.createElement('SOURCE');
                avifSource.type="image/avif";
                let webpSource = document.createElement('SOURCE');
                webpSource.type="image/webp";
                //Буфер для новых элементов
                let df = document.createDocumentFragment();
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
                let picture = document.createElement('PICTURE');
                let avifSource = document.createElement('SOURCE');
                avifSource.type="image/avif";
                let webpSource = document.createElement('SOURCE');
                webpSource.type="image/webp";
                //Буфер для новых элементов
                let df = document.createDocumentFragment();
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

