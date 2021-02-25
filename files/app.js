const fs = require('fs');

// blocking
// required reading files with configuration details
let fileContent = fs.readFileSync('./files/readme.txt', 'utf-8');
console.log(fileContent);

fs.writeFileSync('readme_copy.txt', fileContent);
console.log('wrote');

// non-blocking
let fileContent2 = fs.readFile('readme_copy.txt', 'utf-8', (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(`work done and data is ${data}`);
  }
  console.log('writing contents async');
  fs.writeFile('readme.txt', data, () => {
    console.log('done writing');
  });

  // delete a file
  fs.unlink('readme.txt', (err) => {
    if (err) {
      console.log(`error in deleting file : ${err}`);
    }
  });
});

console.log('doing something else');
