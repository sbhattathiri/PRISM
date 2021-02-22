global.age = 12;

function Person() {
  this.age = 34;
  setTimeout(function () {
    console.log(age);
  }, 1000);
  setTimeout(() => {
    console.log(age);
  }, 1000);
}

var p = new Person();
