const fs = require('fs');

// fs.readFile('01_basics/file.txt', 'utf8', (err, fileData) => {
//     console.log(err, fileData);
// });

// const readFileSync = fs.readFileSync('01_basics/file.txt');
// console.log(readFileSync.toString());

// fs.writeFile('file2.txt', "This is a file data!", ()=>{
//     console.log("Written to the file!");
// });
const writeFileSync = fs.writeFileSync('01_basics/file2.txt', "This is a file 2 data!");
console.log(writeFileSync);


console.log("Finished reading file!");