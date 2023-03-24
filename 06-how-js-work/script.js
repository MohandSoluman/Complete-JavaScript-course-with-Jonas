'use strict';
/*
function calcAge(birthYear) {
  const age = 2023 - birthYear;
  function printInfo() {
    let out = `my name is ${fname} my age is ${age} i born at ${birthYear}`;
    if (age > 25) {
      const allowed = true;
      function foo(a, b) {
        console.log(`sum is ${a + b} `);
      }
      out = 'new out put';
    }
    console.log(out);
    // foo(); //blocked scope
  }
  printInfo();
  return age;
}

const fname = 'mohand';
// calcAge(1994);
if (true) {
  console.log(fname);
  // let fname = 'ali';
}
//---------------------------------------------
//hoisting   here all products deleted because of hoisting
// num =undefined
if (!num) {
  deleteProducts();
}

var num = 10;
function deleteProducts() {
  console.log('All products Deleted');
}
// we should use const or let  the compiler
// use  const foo= function(){}/
//------------------
//this
// console.log(this);
function foo(a) {
  console.log(this);
  return a;
}
const fooAro = a => {
  console.log(this);
  return a;
};

fooAro(5);
//---------------------------------------------
const obj1 = {
  name: 'ali',
  age: 29,
  print() {
    console.log(`my name is ${this.name} my age is ${this.age}`);

    const calcAge = () => {
      let test = this.age * 3;
      console.log(test);
    };
    calcAge();
  },
};

obj1.print();

const foo = () => {
  console.log(this);
};
foo();

*/
//reference Type
const obj1 = { fName: 'Mohand', age: 29, num: 10, add: ['a', 'b', 'c'] };
// const ali = obj1;
// ali.fName = 'Ali';
//copying obj
const obj2 = Object.assign({}, obj1);
obj1.age = 23;
obj2.fName = 'Doha';
obj2.add.push(4);
console.log(obj1, obj2);
