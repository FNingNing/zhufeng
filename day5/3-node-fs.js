
let fs = require('fs');
/* 
fs.mkdir(路径,回到函数)    //创建文件夹
fs.reafdir(路径,回调函数)  //读取文件夹的目录
fs.writeFile(路径,写入的内容,格式,回调函数);      //有文件的话就覆盖，没有文件就创建文件 fs.writeFileSync(路径，写入的内容，格式)   同步写入
fs.appendFile(路径,追加的内容,格式,回调函数)        //在当前文件尾部追加的内容 
fs.appendFileSync(路径,追加的内容,格式) 
fs.readFile(路径，格式，回到函数)   //返回值是读取后的内容
fs.readFileSync(路径，格式) //同步读取
fs.unlink(路径，回调函数)//删除文件
ffs.copyFile(路径1,路径2【目的路径】,回调函数)  //复制文件
*/

/* fs.mkdir('./textDir',err=>{
    if(err){
        console.log(err);
        return
    }
    console.log('ok');
    
}) */

//参数1的路径相对于当前文件,回调函数可以忽略不写  
//同步创建，如果没有创建完成，不会执行下面的代码

// let writeFile =fs.writeFileSync('./textDir/1.js','aaaaa','utf-8');
// console.log(writeFile);
// let readFilr = fs.readFileSync('./textDir/1.js','utf-8');
// console.log(readFilr);
// let appendFile = fs.appendFileSync('./textDir/1.js','bbbbb','utf-8');
// console.log(appendFile);
let writeFile =fs.writeFileSync('./textDir/1.js','var a = {name:"zhufeng"}','utf-8');
console.log(writeFile);

