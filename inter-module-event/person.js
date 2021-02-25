// produces events
const events = require('events');

exports.Person = function () {
  let personEvents = new events.EventEmitter();
  function generateEvent(args) {
    console.log(`Emitting event with args: ${JSON.stringify(args)}`);
    // if some condition
    personEvents.emit('myEvent', args);
  }
  return {
    generateEvent: generateEvent,
    personEvents: personEvents,
  };
};
