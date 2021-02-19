// declarative function (not a good practice, as all functions are put into global container)
function sum(x, y) {
  return x + y;
}

result = sum(10, 20);
console.log(result);

// use anonymous functions instead. As it is not parsed during loading, improved perf
anon_sum = function (x, y) {
  return x + y;
};

anon_result = anon_sum(10, 20);
console.log(anon_result);

// lambda : less verbose
lambda_sum = (x, y) => {
  return x + y;
};

lambda_result = lambda_sum(10, 20);
console.log(lambda_result);

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

// inheritance : ES5 requires prototypal inheritance
