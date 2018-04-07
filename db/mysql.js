const mysql = require('mysql');
//连接数据库
const pool = mysql.createPool({
    host     : '106.15.72.232',
    user     : 'user_other',
    password : 'bqdsql',
    database : 'user_other'
});

function query(sql, callback) {
    pool.getConnection(function (err, connection) {
        // Use the connection
        connection.query(sql, function (err, rows, fields) {
            callback(err, rows, fields);
            connection.release();//释放链接
        });
    });
}
exports.query = query;