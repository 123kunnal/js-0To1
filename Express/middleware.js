const express = require('express');
const app = express();

// Custom middleware to log method and URL
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`); // Logs like: GET /
  next();
});

app.get('/', (req, res) => {
  res.send('Done work');
});

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
