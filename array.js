var arr=['cat','goat','boat'];
console.log(arr)
console.log(arr[0])
arr.forEach((item)=>{
    console.log(item)
})

 var arr1=arr.map((animalname)=>animalname=animalname.toUpperCase())
 console.log(arr)
 console.log(arr1)

 arr1.push('horse')
 console.log(arr1)
   var arr2=arr1.filter((element)=>element.length<4)
 console.log(arr2)


 const profile=['mandar','hag','manduhagu@gmail.com'];
 const[firstname,lastname,email]=profile;
 console.log(firstname);
 console.log(lastname);
 console.log(email);    

 const profile1=["mandar","jog","mandarjog@gmail.com"];
 const[firstname1, ...data]=profile1;
 console.log(firstname);
 console.log(data);
 
