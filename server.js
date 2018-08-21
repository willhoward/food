const express = require('express');
const app = express();
const data = require('./data.json');

app.use(express.static('frontend'));

app.get('/data', (req, res) => res.json(data));

app.listen(3000, () => console.log('Example app listening on port 3000!'));
