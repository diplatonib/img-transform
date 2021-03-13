let chalk = require('chalk');
let str = 'YYY1BCC42RRR1';
let arr = str.split('');
console.log(arr);
let result = [];

arr.forEach( function compare (element, index, array){

	if (element[index] == element[index + 1]){
			let count = index + 1;
			console.log(chalk.red(count));
	} 
	if (element[index] != element[index + 1]){
		let count = index + 1;
		result.push(chalk.yellow(element));
	}

})


// for (var i = 0; i < arr.length; i++) {
//     for (var k = i + 1; k < arr.length; k++) {
//         if (arr[i] == arr[k]) {
//            let count = i + 1;
// 			console.log(chalk.red(count));
//         }
//         if (arr[i] != arr[k]) {
//            let count = i + 1;
// 			console.log(chalk.red(count));
//         }
//     }
//     console.log(chalk.yellow(arr))
// }
console.log(result);

