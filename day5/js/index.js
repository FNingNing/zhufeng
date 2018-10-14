let promise = require('./peomise2')
let p1 = new Promise((resolve,reject)=>{
    //直接同步执行
    // resolve(100);
    // reject(200);
    setTimeout(() => {
        Math.random()>0.5?resolve(100):reject(200)
    }, 0);
        
})
/* let p2 = p1.then(res=>{
    console.log(res);   
    // throw new Error('lose') 

},rej=>{
    console.log(rej);       
});
 p2.then(res=>{
    console.log(res);       
}).catch((rej)=>{
    console.log(rej);
    
}) */
let p2 = new Promise(rej=>{
    setTimeout(() => {
        console.log(rej);
    }, 0);
  

})
Promise.all([p1,p2]).then(rej=>{
    console.log(rej);
    
})
