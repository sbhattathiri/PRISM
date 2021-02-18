// // var colors = ['RED', 'GREEN', 'BLUE'];

// // for (var i = 0; i < colors.length; i++) {
// //   console.log(colors[i]);
// // }

// var x = 5;

// function foo() {
//   var y = 10;
//   console.log(y);
//   if (false) {
//     var z = 100;
//   }
//   console.log(z);
// }

// y = 20;

// foo();

// // function foo2() {
// //   let y = 10;
// //   console.log(y);
// //   if (true) {
// //     let z = 100;
// //   } else {
// //     let z = 300;
// //   }
// //   console.log(z);
// // }

// // y = 20;

// // foo2();

// //sync and async

// //scopes
// {
//   const x = 10;
//   console.log(x);
// }

// {
//   x = 20;
//   console.log(x);
// }

// setTimeout(function () {
//   console.log('After 5 seconds');
// }, 5000);

// console.log('I am not blocked by setTimeout');

// var colors = ['RED', 'GREEN', 'BLUE'];

// for (var i = 0; i < colors.length; i++) {
//   setTimeout(function () {
//     console.log(colors[i]);
//     console.log(i);
//   }, 1000);
// }

// var colors = ['RED', 'GREEN', 'BLUE'];

// function printColor() {
//   for (var i = 0; i < colors.length; i++) {
//     console.log(colors[i]);
//   }
// }

// setTimeout(printColor, 2000);

var colors = ['RED', 'GREEN', 'BLUE'];

for (var i = 0; i < colors.length; i++) {
  setTimeout(function (i) {
    console.log(colors[i]);
    console.log(i);
  }, 1000);
}
