var fs = require("fs");


//read first file
console.log("Going to read the first file");
var data1 = fs.readFileSync('file_1.txt');

console.log(data1.toString());



//read second file
console.log("Going to read the second file");
var data2 = fs.readFileSync('file_2.txt');

console.log(data2.toString());


var combinedFiles = data1 + '\n' + data2;

var headerFooter = "I wrote this!\n";

fs.writeFile('combined.txt', headerFooter + combinedFiles, function(err){
    if(err) throw err;
    console.log("Header added and data combined successfully");
});

//append the file

fs.appendFile('combined.txt', '\n' + headerFooter, (err) =>{
    if (err) throw err;
    console.log('Footer added to the file');
});
