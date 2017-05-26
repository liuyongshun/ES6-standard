// 快级作用域变量和普通变量let & var

// 问题1：
// let numChunkScope = 5;
// for (let i = 0; i < 10; i++) {}
// console.log(i); // not defined
// var num = 2;
// for (var i = 0; i < 10; i++) {}
// console.log(i); // 10

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

// 常量（不可更改）
// const NUM_STABLE = 1;

/** first:
 * export method multiple variable export and import is the same as the export
 */
// export {
//   numChunkScope,
//   num,
//   NUM_STABLE
// };
