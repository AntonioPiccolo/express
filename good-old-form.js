const express = require('express');
const bodyparser = require('body-parser');

const app = express();
const numberPort = process.argv[2];

app.use(bodyparser.urlencoded({extended: false}));
app.post('/form', function(req,res){
    let reverse = req.body.str.split('').reverse().join('');
    res.end(reverse);
})

app.listen(numberPort);