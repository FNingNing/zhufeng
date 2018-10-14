console.log(12);
console.log(module);
console.log(require);
console.log(global);
let qqq = require('./a.js')//require中参数是另一个模块的路径
console.log(qqq,a,'b'); //a is not defined
console.log(qqq);//qqq是个空对象，原因就是a.js没有导出的操作
/*
require可以让引用的文件执行，但是不能直接获取文件中的变量，因为每一个文件对于node来说都会形成私有作用域，
*/
