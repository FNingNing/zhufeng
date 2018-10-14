 function sum(str){  
     var sum = 0;
        for(var i=0;i<arguments.length;i++){
            
            if(!isNaN(arguments[i])){
               sum += Number(arguments[i]);
            }
        }
        let lg = arguments.length;       
        return{
            sum,
            lg
        } 
        
} 


let ary=[1,7,90,65];

exports.sum =sum(...ary);