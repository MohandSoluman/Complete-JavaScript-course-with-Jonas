// 'use strict';
const a = 'mohand';
first();

function first() {
  const b = 'hello';
  second();
  function second() {
    const c = 'hi';
    third();
  }
}
function third() {
  const d = 'hey';
  console.log(c, d);
}

console.log(first, '****************', third);
