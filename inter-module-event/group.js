// consumes events
const events = require('events');

exports.Group = (Person) => {
  function handleEvents(args) {
    console.log(`caught event with args ${JSON.stringify(args)}`);
  }

  Person.personEvents.on('myEvent', (args) => {
    handleEvents(args);
  });
};
