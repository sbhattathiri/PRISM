//
const fs = require('fs');

fs.mkdir('dir1', (err) => {
  if (err) {
    console.log(err);
  }
  fs.readFile('readme_copy.txt', 'utf-8', (err, data) => {
    fs.writeFile('./dir1/readme.txt', data, (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log('done');
      }
    });
    fs.unlink('./dir1/readme.txt', () => {
      fs.rmdir('dir1', () => {
        console.log('removed test dir');
      });
    });
  });
});

// fs.rmdir('dir1');
