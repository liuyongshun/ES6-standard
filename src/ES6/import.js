
import aa from './exports.js'
aa()
// import命令具有提升效果，会提升到整个模块的头部，首先执行。
// foo();
// import { foo } from 'my_module';

// //
// import defaultMember from "module-name";

// // 整体加载
// import * as name from "module-name";


// import { member } from "module-name";
// import { member as alias } from "module-name";
// import { member1 , member2 } from "module-name";
// import { member1 , member2 as alias2 , [...] } from "module-name";
// import defaultMember, { member [ , [...] ] } from "module-name";
// import defaultMember, * as name from "module-name";
// import "module-name";

/**
 * 模块加载机制
 * 它遇到模块加载命令import时，不会去执行模块，而是只生成一个动态的只读引用。等到真的需要用到
 * 时，再到模块里面去取值，换句话说， ES6 的输入有点像 Unix 系统的 “ 符号连接 ” ，原始值变了，import输入的值也会跟着变。因此， ES6 模块是动态引
 * 用，并且不会缓存值，模块里面的变量绑定其所在的模块。
 */
// ES6 模块加载的机制，与 CommonJS 模块完全不同。 CommonJS 模块输出的是一个值的拷贝，而 ES6 模块输出的是值的引用。
// CommonJS 模块输出的是被输出值的拷贝，也就是说，一旦输出一个值，模块内部的变化就影响不到这个值。

/**
 * commonJS规范：
 * CommonJS 的一个模块，就是一个脚本文件。require命令第一次加载该脚本，就会执行整个脚本，然后在内存生成一个对象。
 * 该对象的id属性是模块名，exports属性是模块输出的各个接口，loaded属性是一个布尔值，表
 * 示该模块的脚本是否执行完毕。其他还有很多属性，
 */
{
  id: '...',
  exports: {},
  loaded: true
}
