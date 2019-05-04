var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('contact', { title: 'Express' });
});

//连接数据库
var db = require('./../config/db');
var mysql = require('mysql');
var connection = mysql.createConnection(db.mysqlDb);
connection.connect();
router.post('/',function(req,res,next){
	// console.log(req.body);
	var insertSql = 'insert into contact(cname,yname,eadd,content) value(?,?,?,?)'
	var  addSqlParams = [req.body.user,req.body.yuser,req.body.eadd,req.body.content];
	// console.log(addSqlParams);
	connection.query(insertSql,addSqlParams,function(err,result){
		if(err) return console.error(err)
		// console.log('123')
		res.render('index',{q:'123'});
	})
})
module.exports = router;