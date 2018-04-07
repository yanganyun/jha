const express = require('express');
const swig = require('swig');
const path = require ('path');
const fs = require('fs');

const app = express();

//监听端口
app.listen(3000,'localhost');

//设置模板引擎
app.engine('html',swig.renderFile);
app.set('views','./page');
app.set('view engine','html');

//路由绑定
app.use('/api',require('./router/api'));
app.use('/',require('./router/page'));

//资源文件路由
app.use('/pic',express.static(__dirname + '/pic'));

//取消缓存
swig.setDefaults({
    cache : false
});