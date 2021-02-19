var colors = ['RED', 'GREEN', 'BLUE'];

(function delayedPrintingClosure() {
  for (var i = 0; i < colors.length; i++) {
    (function (a) {
      setTimeout(function () {
        console.log(colors[a]);
        console.log(a);
      }, 3000);
    })(i);
  }
})();
