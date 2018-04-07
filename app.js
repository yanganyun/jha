const express = require('express');
const swig = require('swig');
const path = require ('path');
const fs = require('fs');

const app = express();

app.listen(3000,'localhost');

//设置模板引擎
app.engine('html',swig.renderFile);
app.set('views','./src');
app.set('view engine','html');

//首页
app.get('/', function(req, res){
    res.render('index');
});

swig.setDefaults({
    cache : false
})