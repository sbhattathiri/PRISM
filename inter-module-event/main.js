const person = require('./person');
const group = require('./group');

let p = person.Person();
let g = group.Group(p);

p.generateEvent({ name: 'SVB', age: 33 });
