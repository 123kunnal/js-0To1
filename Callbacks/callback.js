function greetUser(name, callback) {
  console.log("Hi, " + name);
  callback(); // call the function passed as argument
}

function delayedMessage() {
  setTimeout(() => {
    console.log("How are you today?");
  }, 1000);
}

greetUser("Kunnal", delayedMessage);
