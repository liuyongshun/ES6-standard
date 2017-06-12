// The identifier of search @@@@literal

// 快级作用域变量和普通变量let & var

// 问题1：
let numChunkScope = 5;
for (let i = 0; i < 10; i++) {}
// console.log(i); // not defined
var num = 2;
for (var i = 0; i < 10; i++) {}
console.log(i); // 10

// 问题2：
// let arrByES6 = [];
// for (let i = 0; i < 10; i++) {
//   arrByES6[i] = function () {
//     console.log(i);
//   };
// }
// arrByES6[6](); // 6

// var arrByES5 = [];
// for (var i = 0; i < 10; i++) {
//   arrByES5[i] = function () {
//     console.log(i);
//   };
// }
// arrByES5[6](); // 10

// 问题3：
// 只要块级作用域内存在let命令，它所声明的变量就“绑定”这个区域，不再受外部的影响。
// var tmp = 123;
// if (true) {
//   tmp = 'abc';
//   // do not have "let tmp", the result is 123;
//   let tmp;
//   console.log(tmp);
// }

// 参数x默认值等于另一个参数y，而此时y还没有声明，属于 ” 死区 “，所以报错
// function bar (x = y, y = 2) {
//   return [x, y];
// }
// bar();

// 问题4：
// 不允许重复声明变量,而且let声明的不属于window
// function () {
//   let a = 10;
//   var a = 1;
// }

// 常量（不可更改）
const NUM_STABLE = 1;

/** first:
 * The export method of multiple variable export ，and import is the same as the export
 */
export {
  numChunkScope,
  num,
  NUM_STABLE
};
