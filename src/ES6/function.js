/**
 * 一、参数默认值
 * The arguments of default value
 */
function setValue (x, y = 'World') {
  console.log(x, y);
  y = 'modify value';
  console.log(y);
}
setValue();

/**
 * 解构赋值
 */
function foo ({x, y = 5}) {
  console.log(x, y);
}
foo({});
foo({x: 1});
foo({x: 1, y: 2});
// foo();

/**
 * 二、解构赋值
 *进一步拓展
 *下面两种写法都对函数的参数设定了默认值，区别是写法一函数参数的默认值是空对象，但是设置了对象解构赋值的默认值；
 *写法二函数参数的默认值是一个有具体属性的对象，但是没有设置对象解构赋值的默认值。；
 */
// 写法一
function m1 ({x = 0, y = 0} = {}) {
  return [x, y];
}
// 写法二
function m2 ({x, y} = { x: 0, y: 0 }) {
  return [x, y];
}
console.log(m1());
console.log(m2());

// x 和 y 都无值的情况
m1({}); // [0, 0];
m2({}); // [undefined, undefined]

// x 有值， y 无值的情况
m1({x: 3}); // [3, 0]
m2({x: 3}); // [3, undefined]

/**
 * 三、默认值位置
 *非尾部的参数设置默认值，实际上这个参数是没法省略的。如果传入undefined，将触发默认值，null没有该效果。
 */
function f (x = 1, y) {
  return [x, y];
}
f(); // [1, undefined]
f(2); // [2, undefined])
f( , 1); //  报错
f(undefined, 1); // [1, 1]

// 指定默认值后，函数的length属性，将返回没有指定默认值的参数个数。指定了默认值后，length属性将失真。
// rest 参数也不会计入length属性。


/**
 * 三、作用域
 *参数默认值是一个变量，则该变量所处的作用域，与其他变量的作用域规则是一样的，即先是当前函数的作用域，然后才是全局作用域。
 */
var x = 1;
function f (x, y = x) {
  console.log(y);
}
f(2); // 2

