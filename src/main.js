// first: import method
// import * as pub from './ES6/literal';
// import './ES6/literal';
// import './ES6/string';
// import './ES6/array';
import {firstName, lastName, year} from './ES6/exports';
// import './ES6/function';
// import './css/index.styl';
// import './css/indexdd.css';
// console.log(pub.numChunkScope);
// console.log(pub.NUM_STABLE);
// console.log(pub.num);
// console.log(pub);

// second: import method
// import { numChunkScope, NUM_STABLE, num } from './ES6/literal';
// console.log(numChunkScope);
// console.log(NUM_STABLE);
// console.log(num);
// console.log(1, 690);

  // var zzz = '3333';
  // document.getElementById('result').appendChild(`<b>${zzz}</b>`);
console.log(firstName, lastName, year);
function f (x, y = 1, ...arg) {
  console.log(arguments.length);
  return [x, y];
}

console.log(f(2));
