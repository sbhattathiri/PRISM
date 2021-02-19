// ES6
class Person {
  constructor(firstname, lastname) {
    this._firstname = firstname;
    this._lastname = lastname;
  }

  // setter
  setFirstname(firstname) {
    this._firstname = firstname;
  }

  // getter
  getFirstname() {
    return this._firstname;
  }
}

p = new Person('Suraj', 'Vasudevan');
p.setFirstname('Honey');
console.log(p.getFirstname());
