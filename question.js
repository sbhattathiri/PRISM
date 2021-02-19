window.age = 12;

function Person() {
  this.age = 34;
  setTimeout(function () {
    console.log(this.age);
  }, 10000);
}

var p = new Person();
