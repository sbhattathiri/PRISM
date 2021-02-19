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
