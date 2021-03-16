const express = require('express');
const ejs = require('ejs');
const ejsengine = require('ejs-mate');

const port = 3000;
const app = express();

app.set('view engine', 'ejs');
app.set('views','./views');
app.use('/public',express.static('./public'));
app.engine('ejs',ejsengine);


app.get('/', (req, res) => {
    res.render('page/index');
});
app.get('/about', (req, res) => {
    res.render('page/about');
});
app.listen(port, ()=>{
    console.log('> Running');;
});

