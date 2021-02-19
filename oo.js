// instance function or ES5 functional class
function Person(firstname, lastname) {
  this.firstname = firstname;
  this.lastname = lastname;

  this.fullname = function () {
    console.log(this.firstname + ' ' + this.lastname);
  };
}

var p = new Person('Suraj', 'Bhattathiri');
p.fullname();

// ES6
class PersonOO {
  constructor(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
  }

  // method
  full_name() {
    console.log(this.firstname + ' ' + this.lastname);
  }
}

p00 = new PersonOO('Suraj', 'Vasudevan');

console.log(p00.firstname);
console.log(p00.lastname);
p00.full_name();

// ES6
class PrivatePerson {
  constructor(firstname, lastname) {
    this._firstname = firstname;
    this._lastname = lastname;
  }

  // method
  full_name() {
    console.log(this._firstname + ' ' + this._lastname);
  }
}

privatePerson = new PrivatePerson('Suraj', 'Vasudevan');

console.log(privatePerson._firstname);
console.log(privatePerson._lastname);
p00.full_name();
