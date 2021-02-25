let a = 0;
function init() {
  a = 1;
}

function incr() {
  a = a + 1;
}

debugger;
console.log(a);
init();
console.log(a);
incr();
console.log(a);
