//prints hey after 1 sec but infinitely
// setInterval(function(){
//     console.log("Hey");
    
// },1000)
 let TimeInterID=setInterval(function(){
    console.log("Hey");
    
},1000)

setTimeout(()=>{
    clearInterval(TimeInterID)
},4000)