var fs = require("fs");

//read first file
console.log("Going to read the first file");
var data1 = fs.readFileSync('file_1.txt');

console.log(data1.toString());



//read second file
console.log("Going to read the second file");
var data2 = fs.readFileSync('file_2.txt');

console.log(data2.toString());

console.log("Program Ended");
