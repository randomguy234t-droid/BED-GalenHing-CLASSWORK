const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Welcome to the Book Category API');
});

app.get('/categories', (req, res) => {
  res.json([
    { id: 1, name: 'Fiction' },
    { id: 2, name: 'Non-Fiction' },
    { id: 3, name: 'Biography' }
  ]);
});

app.get('/about', (req, res) => {
  res.send('Hi, I am a Year 1 student at Ngee Ann Polytechnic. I am currently studying Information Technology. I enjoy learning about programming and developing applications.');
});

app.listen(3000, () => {
  console.log('Listening on port 3000');
});

