let http = require('http');
let url = require("url");
let fs = require('fs')
/* 
    let server= http.createServer(回调函数)     创建一个web服务，处理客户发送过来的请求，返回值是一个server服务
        【请求】：
            1，请求页面
            2，请求资源 
    server.listen(9090,callback）   //通过server服务去监听一个端口，如果该端口服务器成功启动，会自动运行相对应的回调函数
        
*/
let server = http.createServer((req,res)=>{
      console.log("客户端发送请求")  
      /* 
        客户端发送请求：
            请求页面：返回给客户端相对应的页面【通过内置模块fs取到我目录当中的页面进行返回】
            请求资源：通过fs读取到本地的data数据【也可以读取本地安装的数据库（mongodb）其中的内容】通过web服务进行返回给客户端，客户端拿到数据进行渲染加载  
      */      
    /* 
    req：客户端请求的对象
      req.url请求的地址
      url.parse(req.url,true) //url -》node内置模块
    res:服务端相应的对象 
    */
   let {pathName,query} = url.parse(req.url,true);
   if(pathNme ==='/'){
       let mon = fs.readFileSyne('6-heh.html','utf-8')
       res.end(mon);
   }else{
    res.end();
   }
})
server.listen(9090,()=>{
    console.log('9090，端口监听成功');
    
})