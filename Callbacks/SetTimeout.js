//will print msg after 1 sec only once
setTimeout(()=>{
    console.log("Hi");
    
},1000)
//stop setTimeout
let TimeoutId=setTimeout(()=>{
    console.log("bye");
    
},1000)
// console.log(TimeoutId);
//setTimeout when defined generates a Id which is used in cleatTimeout
// clearTimeout(TimeoutId)
