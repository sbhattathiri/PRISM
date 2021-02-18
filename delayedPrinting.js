var colors = ['RED', 'GREEN', 'BLUE'];
var i = 0;
function myDelayedPrinter() {
  setTimeout(function () {
    console.log(i);
    console.log(colors[i]);
    i++;
    if (i < colors.length) {
      myDelayedPrinter();
    }
  }, 2000);
}

myDelayedPrinter();
