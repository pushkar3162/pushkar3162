var fs =require('fs')

fs.readFile('.content/first.txt',function(err,data){
             if(err) return console.error(err);
             console.log(data.toString)

})

 console.log("reading completed");
console.log("activity start");
setTimeout{()=>
{
    console.log("activity completed");
}
}