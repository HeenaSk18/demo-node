const express = require('express');
const app = express();

app.get('/api/book', (req, res) => {
    let books = [
        { name: "abc", price: 52 },
        { name: "efg", price: 145 },
        { name: "defh", price: 250 },
        
    ]
  res.send(books);

});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
