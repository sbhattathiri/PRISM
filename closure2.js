// ES5: a function returning encapsulated data through another function
function f() {
  let data = 'I am safe data (token)';
  let isAuthenticated = true;
  return function g() {
    if (isAuthenticated) {
      return data;
    }
  };
}

myf = f();
console.log(typeof myf);
console.log(myf());

// level -2
var getValue, setValue;
(function () {
  var secret = 123;
  getValue = function () {
    return secret;
  };

  setValue = function (val) {
    secret = val;
  };
})();

console.log(getValue());
setValue(555);
console.log(getValue());

var fn = (function iife(author) {
  var company = 'Murthy Infotech';
  console.log('by ' + author);

  log = function (msg) {
    console.log(msg);
  };

  greet = function (name) {
    console.log('Welcome ' + name);
    log('Received data from ' + name);
  };

  add = function (x, y) {
    return x + y;
  };

  // return object
  return {
    company: company,
    g: greet,
  };
})('svb');

console.log(fn.company);
fn.g('Kiran');
