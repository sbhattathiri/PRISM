let events = require('events');

function getEmitter() {
  console.log('I am getEmiiter');
  let emitter = new events.EventEmitter();
  process.nextTick(() => {
    console.log('emitting on next tick');
    emitter.emit('start');
  });

  return emitter;
}

let myEventEmitter = getEmitter();
console.log('I am executing');

myEventEmitter.emit('start', () => {
  console.log('started');
});
