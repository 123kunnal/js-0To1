const express = require('express');
const app = express();

app.use(express.json());  // Middleware to parse JSON

app.get('/', (req, res) => {
    res.send("Welcome to kunnal server");
});

app.post('/submit', (req, res) => {
    const name = req.body.name;
    const msg = req.body.msg;

    console.log("Received from client:", name, msg);

    res.send(`Hello ${name}, your message has been received!`);
});

app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});
