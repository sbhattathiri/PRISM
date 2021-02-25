// process objects

process.stdin.on('readable', () => {
  let chunk = process.stdin.read();
  if (chunk != null) {
    process.stdout.write('You typed ' + chunk);
  }
});

// cmd args
// process.args()

// exit
// process.exit()
