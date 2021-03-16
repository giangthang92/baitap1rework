const express = require('express');
const ejs = require('ejs');
const ejsengine = require('ejs-mate');

const port = 3000;
const app = express();

app.get('/', (req, res) => {
    res.send('Dung Giang Dung de');
});
app.listen(port, ()=>{
    console.log('> Running');;
});

