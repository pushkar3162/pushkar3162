var fs =require('fs')

var data=fs.readFileSync('./content/firt.txt')
console.log(data.toString());
console.log('reading completed')