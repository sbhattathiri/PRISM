let events = require('events');

function getEmitter() {
  console.log('I am getEmiiter');
  let emitter = new events.EventEmitter();
  //   process.nextTick(() => {
  //       console.log('emitting on next tick')
  //       emitter.emit('start');
  //   })
  //   emitter.emit('start');
  emitter.on('start', () => {
    console.log('started');
  });
  return emitter;
}

let myEventEmitter = getEmitter();
console.log('I am executing');

myEventEmitter.emit('start');

// myEventEmitter.on('start');

// emitter.emit('start');
