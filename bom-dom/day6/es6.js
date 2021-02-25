// ES6 : template literal
let companyName = 'Suraj Infotech';
let withoutTemplate =
  '<h1 style="background-color:yellow,color:blue,text-align:center">' +
  companyName +
  '</h1>';

let template = `<h1 style="background-color:yellow; color:blue; text-align:center">${companyName}</h1>`;

document.write(template);

let getCustomer = (n) => {
  return n;
};

console.log(`Hello ${getCustomer('Murthy')}`);

//ES6 : object destructuring(angular/react/vue)
function getStock() {
  return {
    symbol: 'NLSN',
    price: 100,
    country: 'KEN',
    exchange: {
      name: 'NASDAQ',
      tradingHours: '9AM',
    },
  };
}

// refer keys only
// let { symbol, price } = getStock();

// console.log(`Price of ${symbol} is ${price}`);

let nlsn = getStock();
console.log(nlsn);

function printStock(stock) {
  let {
    symbol,
    exchange: { name },
  } = stock;
  console.log(`${symbol} is traded under ${name}`);
}

printStock(nlsn);

// spread operator / rest operator
// call by value : primitive datatypes
var x = 10;
var y = x;
y = 20;
console.log(x);

var obj1 = { x: 10 };
var obj2 = obj1;
obj2.x = 20;
console.log(obj1);

obj3 = { ...obj1 };

// default params
function add(a, b = 10) {
  return a + b;
}

let p = {
  name: {
    firstName: 'Suraj',
    lastName: 'Bhattathiri',
  },
  hobby: 'reading',
};

function knowPerson(person = p) {
  console.log(`Name : ${p.name.firstName} and hobby is ${p.hobby}`);
}

knowPerson();

// immutability
let m = { n: 'Suraj', things: [1, 2, 3] };
let n = Object.assign({}, m);
let o = Object.assign({}, m, { n: 'Bhattu' });
let q = Object.assign({}, m, { n1: 'Bhattu' });
console.log(n);
console.log(o);
console.log(q);
console.log(m.things);
console.log(n.things);
n.things = m.things.concat(3);
console.log(`m.things ${m.things}`);
console.log(`n.things ${n.things}`);

// promise and observable
// cannot use try catch with async : because async calls go out of call stack

function longRunningTask() {
  return new Promise((resolve, reject) => {
    /*
    if(true){
      // resolve
    }
    else {
      // reject
    }
    */
  });
}

longRunningTask()
  .then((response) => {
    response;
  })
  .error((err) => err);
