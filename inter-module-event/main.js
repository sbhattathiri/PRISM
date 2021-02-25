const person = require('./person');
const group = require('./group');

const p = person.Person();
const g = group.Group(p);

p.generateEvent({ name: 'SVB', age: 33 });
