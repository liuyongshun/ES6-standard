function aa () {
  console.log(3333);
}

export {
  aa
};
// export default function aa () {
//   setTimeout(_ => {
//     console.log(333);
//   }, 5000);
// }
// method-1
// export var year = 1958;
// method-2
// var firstName = 'Michael';
// var lastName = 'Jackson';
// var year = 1958;
// export {firstName, lastName, year};
// method-3
// export function multiply (x, y) {
//   return x * y;
// };
// // method-4 使用as关键字，重命名了函数v1和v2的对外接口。重命名后，v2可以用不同的名字输出两次。
// function v1 () {
//   // ...;
// }
// function v2 () {
//   // ...
// }
// export {
//   v1 as streamV1,
//   v2 as streamV2,
//   v2 as streamLatestVersion
// };

// // method-5 export命令规定的是对外的接口，必须与模块内部的变量建立一一对应关系。
// //  报错
// export 1;
// //  报错
// var m = 1;
// export m;
// // 上面报错：没有提供对外的接口。第一种写法直接输出 1 ，第二种写法通过变量m，还是直接输出 1 。1只是个值，不是接口
// // 可用如下方法：
// //  写法一
// export var m = 1;
// //  写法二
// var m = 1;
// export {m};
// //  写法三
// var n = 1;
// export {n as m};
// // 规定对外的接口m。其他脚本可以通过这个接口，取到值1。实质是，在接口名与模块内部变量之间，建立了一一对应的关系。

// // ================这一点与 CommonJS 规范完全不同。 CommonJS 模块输出的是值的缓存，不存在动态更新，=============

// // 使用import命令的时候，用户需要知道所要加载的变量名或函数名，否则无法加载。为了方便，就用export default命令，为模块指定默认输出。
// export default function () {
//   console.log('foo');
// }
// // export default命令用在非匿名函数前，也是可以的。foo函数的函数名foo，在模块外部是无效的
// export default function foo () {
//   console.log('foo');
// }
// //  或者写成
// function foo () {
//   console.log('foo');
// }
// export default foo;

// 1. export default命令指定模块的默认输出。一个模块只能有一个默认输出，因此只能使用一次。import命令后面
// 才不用加大括号，因为只可能对应一个方法。
// 2. 本质上，export default就是输出一个叫做default的变量或方法，然后系统允许你为它取任意名字。
// 3. 正是因为export default命令其实只是输出一个叫做default的变量，所以它后面不能跟变量声明语句。
