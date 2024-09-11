var fs = require('fs');
var path = require('path');

// Define the directory and file paths
var newDir = 'newdata';
var file1Path = path.join(newDir, 'file_1.txt');
var file2Path = path.join(newDir, 'file_2.txt');
var combinedFilePath = path.join(newDir, 'combined.txt');

// Create the new directory
fs.mkdir(newDir, { recursive: true }, function(err) {
    if (err) throw err;
    console.log('Directory created successfully');

    // Define content for files
    var content1 = 'this is the content for first file';
    var content2 = 'This is the content for the second file';

    // Content of file_1.txt
    fs.writeFile(file1Path, content1, 'utf8', function(err) {
        if (err) throw err;
        console.log('file_1.txt written successfully');

        // Content of file_2.txt
        fs.writeFile(file2Path, content2, 'utf8', function(err) {
            if (err) throw err;
            console.log('file_2.txt written successfully');

            // Combine contents and write to combined.txt
            var combinedFiles = content1 + '\n' + content2;
            fs.writeFile(combinedFilePath, combinedFiles, 'utf8', function(err) {
                if (err) throw err;
                console.log('combined.txt written successfully');

                
            });
        });
    });
});
