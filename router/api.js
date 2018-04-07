const express = require('express');
const router = express.Router();
const mysql = require('../db/mysql');

//拉去数据库
router.get('/getAll',function(req,res){
    mysql.query('select * from blueair', function(err, rows, fields) {
        if (err) {
            res.json({'code':2,'info':'请求错误！'});
        }else{
            res.json({'code':1,'info':'请求成功！','data':rows});
        }
    });
});




module.exports = router;