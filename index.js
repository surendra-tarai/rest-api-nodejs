const express = require('express');
const app = express();

app.get(['/', '/hello'], (req, res) => {
    res.send('Hello modified 1');
});

app.listen(3000, ()=> console.log('Listening on port 3000...'));
