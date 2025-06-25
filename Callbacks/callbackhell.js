function greet(id,str){
    setTimeout(function(){
        console.log(id);
        if(str){
            str()
        }
    },1000)
}
greet(1,()=>{
    console.log("Hi user");
    greet(2,function(){
        console.log("bye user");
        
    })
})
//problem-->messsy ,reduces readability
//solution-->Promises