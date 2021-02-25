const fs = require('fs');

let myReadStream = fs.createReadStream(`${__dirname}/bigdata.txt`, 'utf-8');
myReadStream.on('data', (chunk) => {
  console.log(`new chunk received from buffer : ${chunk}`);
  console.log(`*****`);
});

myReadStream.on('end', () => {
  console.log(`done`);
});

myReadStream.on('close', () => {
  console.log(`closed`);
});
