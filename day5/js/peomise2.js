 class Promise{
    constructor(excutor){
        //promise构造函数当中的内容
        this.status = 'pending';
        this.value = null;
        //创建两个容器，成功，失败
        this.fulfilledAry = [];
        this.rejectedAry = [];
        //成功之后执行的方法
        let resolve = result =>{//异步执行
            //添加异步代码，进行异步操作
            let timer = setTimeout(() => {
                clearTimeout(timer);
                if(this.status === 'pending'){
                this.status = 'fulfilled';
                this.value = result;
                this.fulfilledAry.forEach(item=>item())
                //item => 每一个匿名函数，【匿名函数执行就是回调函数执行】
              }
            }, 0);            
        }
        //失败之后执行的方法
        let reject = reason=>{//异步执行
            //添加异步代码，进行异步操作
            let timer = setTimeout(() => {
                clearTimeout(timer);
                if(this.status === 'peding'){
                this.status = 'rejected';
                this.value = reason;
                this.rejectedAry.forEach(item=>item())
                //item => 每一个匿名函数，【匿名函数执行就是回调函数执行】
                }
            }, 0);            
        }
        try {
            excutor(resolve,reject);
        } catch (error) {
            reject(error)
        }
        
    }

    //promise原型上的方法
    then(fulfilledCB,rejectedCB){
        // //成功执行的方法
        // this.fulfilledAry.push(()=>{fulfilledCB(this.value)});
        // //失败执行的方法
        // this.rejectedAry.push(()=>{rejectedCB(this.value)});
        fulfilledCB = typeof fulfilledCB !== 'function'?()=>{
            return this.value;
        }:fulfilledCB;
        rejectedCB = typeof rejectedCB !=='function'?()=>{
            throw new Error(this.value)
        }:rejectedCB
        return new Promise((resolve,reject)=>{
            this.fulfilledAry.push(()=>{
                try {
                    let x = fulfilledCB(this.value);
                    if(x instanceof Promise){
                        x.then(resolve,reject);
                        return
                    }
                    resolve(x);
                } catch (error) {
                    rejected(error)
                }
              
            })
            this.rejectedAry.push(()=>{
                try {
                    let x = rejectedCB(this.value);
                    if(x instanceof Promise){
                        x.then(resolve,reject)
                        return
                    }
                    resolve(x);
                } catch (error) {
                    rejected(error)
                }
                
            })
        })
   }
}
module.exports = Promise;

