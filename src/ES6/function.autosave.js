/**
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
foo({x: 1}) // 1, 5
foo({x: 1, y: 2}) // 1, 2
foo() // TypeError: Cannot read property 'x' of undefined