const fs = require('fs');

let myReadStream = fs.createReadStream(`${__dirname}/bigdata.txt`, 'utf-8');
let myWriteStream = fs.createWriteStream(`${__dirname}/bigdata-copy2.txt`);
myReadStream.on('data', (chunk) => {
  myWriteStream.write(chunk);
  myWriteStream.close();
});

// myWriteStream.close();
myWriteStream.on('close', () => {
  console.log(`written and closed`);
});
