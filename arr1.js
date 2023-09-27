const multiplication=(numberone,numbertwo)=>{
    return new promise((resolve,reject)={
        setTimeout(()=>{
            if(numberone<0 || numbertwo<0){
                return reject("only positive numbers allowed")
            }
            resolve(numberone*numbertwo)
        },4000)



    })
multiplications(5,3).then((product)=>)