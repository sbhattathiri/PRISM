// ES6
class Person {
  constructor(firstname, lastname) {
    this._firstname = firstname;
    this._lastname = lastname;
  }

  // setter
  set firstname(firstname) {
    this._firstname = firstname;
  }

  // getter
  get firstname() {
    return this._firstname;
  }

  // setter
  set lastname(firstname) {
    this._lastname = lastname;
  }

  // getter
  get lastname() {
    return this._lastname;
  }

  showName() {
    return this._firstname + ' ' + this._lastname;
  }
}

class Citizen extends Person {
  constructor(firstname, lastname, nationality) {
    super(firstname, lastname);
    this._nationality = nationality;
  }

  // setter
  set nationality(nationality) {
    this._nationality = nationality;
  }

  // getter
  get nationality() {
    return this._nationality;
  }

  getName() {
    return super.showName();
  }
}

c = new Citizen('Suraj', 'Vasudevan', 'India');
console.log(c.firstname);
console.log(c.getName());
