/**
 * @@@@ Array
 * 类数组的对象（array-like object）和可遍历（iterable）的对象,转化为数组。常见类数组的对象：DOM的NodeList集合和argments
 */
let arrayLike = {
  '0': 'a',
  '1': 'b',
  '2': 'c',
  length: 3
};
// ES5 写法
var arr1 = [].slice.call(arrayLike);
console.log(arr1);

// ES6 写法 : Array.from()
let arr2 = Array.from(arrayLike);
console.log(arr2);

//
let ps = document.querySelectorAll('p');
Array.from(ps).forEach(function (p) {
  console.log(p);
});
