// const add = (a, b) => a + b;

// const Total = (x, y) => {
//   let avg = 1;

//   const final = add(x, y) * avg;

//   if (isNaN(final)) {
//     console.error("Not a number");
//   }
//   console.log(final);
// };

// Total(2, 3);

// const currentYear = 2025;

// function age(currentAge) {
//   const DOY = currentYear - currentAge;
//   console.log(DOY);
// }

// age(32);

// let a = [1, 3, 4];

// a.push(5);
// a.pop();

// const numFind = a.filter((num) => num < 2).map((add) => add * 2);
// // .push();
// console.log(numFind);
// console.log(a);

function init() {
  let name = "Mozilla"; // name is a local variable created by init
  function displayName() {
    // displayName() is the inner function, that forms a closure
    console.log(name); // use variable declared in the parent function
  }
  displayName();
}
init();

// function outer() {
//   let a = 100;

//   function inner() {
//     console.log(a);
//   }

//   inner();
// }

// outer();

// function sayHi() {
//   let name = "Varun";

//   if (true) {
//     let lName = "M L";

//     const fullName = name + " " + lName;
//   }

//   console.log(fullName);
// }

// sayHi();

const add = (n) => {
  return n * n;
};

// console.log(add(2));

let a = 2;

function check() {
  let a = 22;

  console.log(a);
}

check();

const checkLearning = () => {
  let a = 100;

  a = 200;

  console.log(a);
};

// checkLearning();

// function inner() {
//   let a = 10;

//   function outer() {
//     console.log(a);
//   }
//   return a;

//   outer();
// }

// console.log(inner());

// function counter() {
//   let count = 0;

//   function countIncrease() {
//     count++;
//     console.log(count);
//   }

//   // countIncrease();
//   return countIncrease;
// }

// // coun;

// const c = counter();
// c();
// c();

let s = "This is me";

s = "This is not me";

console.log(s);

// function evenNumber() {
//   ///even numbers 1-100
//   let even = [];
//   // what is even number?
//   for (let i = 1; i <= 100; i++) {
//     if (i % 2 === 0) {
//       // console.log(i);
//       even.push(i);
//     }
//   }
//   // return true;

//   return even;
// }

// console.log(evenNumber());

// function fizz() {
//   for (let num = 1; num < 50; num++) {
//     num % 3 === 0 && num % 5 === 0
//       ? "divisible by both"
//       : num % 3 === 0
//       ? "divisible by 3"
//       : num % 5 === 0
//       ? "divisible by 5"
//       : "num";
//   }
//   return true;
// }
// console.log(fizz());

let aq = [1, 3, 35245, 5, 4, 13, 2];

console.log(aq.length);

function arrayCheck() {
  let newArray = [];
  for (let i = 0; i < aq.length - 1; i++) {
    if (aq[i] > aq[i + 1]) {
      // aq.push(i);// I have to fil

      newArray.push(aq[i]);
    }
  }

  return newArray;
}

console.log(arrayCheck());
let k = [1, 2, 3, 4];
function sum() {
  let sumA = 0;

  for (let i = 0; i < k.length; i++) {
    sumA = sumA + k[i];
    console.log(sumA);
  }
  return true;
}

console.log(sum());
