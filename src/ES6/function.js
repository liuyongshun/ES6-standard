/**
 * 一、参数默认值
 * The arguments of default value
 */
// function setValue (x, y = 'World') {
//   console.log(x, y);
//   y = 'modify value';
//   console.log(y);
// }
// setValue();

/**
 * 解构赋值
 */
// function foo ({x, y = 5}) {
//   console.log(x, y);
// }
// foo({});
// foo({x: 1});
// foo({x: 1, y: 2});
// foo();

/**
 * 二、解构赋值
 *进一步拓展
 *下面两种写法都对函数的参数设定了默认值，区别是写法一函数参数的默认值是空对象，但是设置了对象解构赋值的默认值；
 *写法二函数参数的默认值是一个有具体属性的对象，但是没有设置对象解构赋值的默认值。；
 */
// // 写法一
// function m1 ({x = 0, y = 0} = {}) {
//   return [x, y];
// }
// // 写法二
// function m2 ({x, y} = { x: 0, y: 0 }) {
//   return [x, y];
// }
// console.log(m1());
// console.log(m2());

// // x 和 y 都无值的情况
// m1({}); // [0, 0];
// m2({}); // [undefined, undefined]

// // x 有值， y 无值的情况
// m1({x: 3}); // [3, 0]
// m2({x: 3}); // [3, undefined]

/**
 * 三、默认值位置
 *非尾部的参数设置默认值，实际上这个参数是没法省略的。如果传入undefined，将触发默认值，null没有该效果。
 */
// function f (x = 1, y) {
//   return [x, y];
// }
// f(); // [1, undefined]
// f(2); // [2, undefined])
// // f( , 1); //  报错
// f(undefined, 1); // [1, 1]

// 指定默认值后，函数的length属性，将返回没有指定默认值的参数个数。指定了默认值后，length属性将失真。
// rest 参数也不会计入length属性。

/**
 * 三、作用域
 *参数默认值是一个变量，则该变量所处的作用域，与其他变量的作用域规则是一样的，即先是当前函数的作用域，然后才是全局作用域。
 */
// var x = 1;
// function f (x, y = x) {
//   console.log(y);
// }
// f(2); // 2

/**
 * 执行环境：执行环境定义了变量或函数有权访问的其他数据。函数都有自己的执行环境，全局执行环境是 window 对象
 * 变量对象：环境中定义的所有变量和函数都保存在这个对象中。
 * 作用域链：保证对执行环境有权访问的所有变量和函数的有序访问。
 * 活动对象：在最开始时只包含一个变量，即 arguments 对象（这个对象在全局环境中是不存在的）。
 * ***************************************************************
 * 分析：y的默认值是匿名函数，声明时，foo函数的作用域还没有形成。
 * 该匿名的作用域前端是foo的活动对象即argments部分。
 * 下一部分就是全局作用域。该匿名无法访问foo环境内的变量。
 */
// var x = 1;
// function foo (x, y = function () { console.log(x); }) {
//   console.log(x); // 该x是参数x，作用域链先查到argments的x，不是全局x。
//   x = 3;          // 重写了参数x。
//   y();            // 因为参数x被重新赋值，所以此时输出3
//   console.log(x); // 同理为3
// }
// foo(7); // 3

/**
 * rest参数之后不能再有其他参数
 */
// function add (...values) {
//   let sum = 0;
//   for (var val of values) {
//     sum += val;
//   }
//   return sum;
// }
// console.log(add(2, 5, 3)); // 10

/**
 * 扩展运算,rest的逆运算。
 */
// function add (x, y) {
//   return x + y;
// }
// var numbers = [4, 38];
// console.log(add(...numbers)); // 42

/**
 * 箭头函数
 * 箭头函数有几个使用注意点。
 * 1.函数体内的this对象，就是定义时所在的对象，而不是使用时所在的对象。
 * 2.不可以当作构造函数，也就是说，不可以使用new命令，否则会抛出一个错误。
 * 3.不可以使用arguments对象，该对象在函数体内不存在。如果要用，可以用 Rest 参数代替。
 * 4.不可以使用yield命令，因此箭头函数不能用作 Generator 函数。
 */
// 由于大括号被解释为代码块，所以如果箭头函数直接返回一个对象，必须在对象外面加上括号。
// var getTempItem = id => ({ id: id, name: 'Temp' });
// console.log(getTempItem());

/**
 * this指向的固定化，并不是因为箭头函数内部有绑定this的机制，实际原因是箭头函数根本没有自己的this，
 * 导致内部的this就是外层代码块的this。正是因为它没有this，所以也就不能用作构造函数。
 * 除了this，以下三个变量在箭头函数之中也是不存在的，指向外层函数的对应变量：arguments、super、new.target
 */
// 箭头函数导致this总是指向(函数定义生效:用call调用对象才使this生效，调用别的则不行)时所在的对象（本例是{id: 42}），所以输出的是42。
function foo () {
  setTimeout(() => {
    console.log('id:', this.id);
  }, 100);
}
var id = 21;
foo.call({});
console.log(id);

/**
 * 尾调用：某个函数的最后一步是调用另一个函数
 * 函数调用：函数调用会在内存形成一个 “ 调用记录 ” ，又称 “ 调用帧 ” （ call frame ），保存调用位置和内部变量等信息。
 * 如果在函数 A 的内部调用函数 B ，那么在 A 的调用帧上方，还会形成一个 B 的调用帧。
 * 等到 B 运行结束，将结果返回到 A ， B 的调用帧才会消失。如果函数 B 内部还调用函数 C ，那就还有一个 C 的调用帧。
 * 所有的调用帧，就形成一个 “ 调用栈 ” （ call stack ）
 */
// 不是尾调用，g(x)其实还有一个默认操作，return undefined
function f (x) {
  g(x);
}
f(3);
// 尾调用优化，如果函数 g 不是尾调用，函数 f 就需要保存内部变量 m 和 n 的值、 g 的调用位置等信息。
// 但由于调用 g 之后，函数 f 就结束了，所以执行到最后一步，完全可以删除 f(x)  的调用帧，只保留 g(3)  的调用帧。
function f () {
  let m = 1;
  let n = 2;
  return g (m + n);
}
f();
//  等同于
function f() {
  return g(3);
}
f();
//  等同于
g(3);
