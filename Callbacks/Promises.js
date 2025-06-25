function greet(id, str) {
    console.log(id);
    
    return new Promise(function(resolve, reject) {
        if (str) {
            resolve(str);  // str is a function
        } else {
            reject("Nope");
        }
    });
}

greet(1, () => {
    console.log("Hi user");
    return greet(2)
    .then(function(cb){
        cb()
    })
    .catch(function(err){
        console.log(err);
        
    })
})
.then(function(callback) {
    // callback is the resolved function
    callback(); // Execute it
})
.catch(function(err) {
    console.log("Error:", err);
});
