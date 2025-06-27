const express = require('express');
const app = express();

app.use(express.json());  // Middleware to parse JSON
app.use(express.static('public'))
app.get('/', (req, res) => {
    res.send("Welcome to kunnal server");
});


app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});

// If someone visits http://localhost:3000/index.html, it serves public/index.html.
// If you access http://localhost:3000/style.css, it serves public/style.css.