var express = require('express');
var router = express.Router();

var mysql = require('mysql');
var db = require('./../config/db');


var conncetion = mysql.createConnection(db.mysqlDb);
conncetion.connect();

/* GET home page. */
router.get('/', function(req, res, next) {
	var selectSql = "SELECT * FROM products";
	conncetion.query(selectSql,function(err,result){
		// console.log(window)
		res.render('products', {result:result});
	})
});

router.post('/',function(req, res, next){
	var cate = req.body.cate
	var tag = req.body.tag
	// console.log(tag)
	var selectSql;
	if(cate != '' && tag != ''){
		// console.log(1)
		selectSql = "SELECT * FROM products where cate like '%"+cate+"%' and tag like '%"+tag+"%'";
	}else if(cate == ''){
		// console.log(2)
		selectSql = "SELECT * FROM products where tag like '%"+tag+"%'";
	}else if(tag == ''){
		// console.log(3)
		selectSql = "SELECT * FROM products where cate like '%"+cate+"%'";
	}
	conncetion.query(selectSql,function(err,result){
		// console.log(selectSql)
		// console.log(result)
		res.send(result)
	})
})

module.exports = router;