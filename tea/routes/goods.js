var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var db = require('./../config/db');

var conncetion = mysql.createConnection(db.mysqlDb);
conncetion.connect();

/* GET home page. */
router.get('/', function(req, res, next) {
	
});

router.post('/', function(req, res, next) {
	console.log(req.body)
  	var selectSql = "SELECT * FROM products WHERE name='"+req.body.name+"'";
  	var selectSql2 = "SELECT * FROM goods";
  	var insertSql = "INSERT INTO goods(name,num,price,src,total) value(?,?,?,?,?)"
	conncetion.query(selectSql,function(err,result){
		var sum = req.body.num * result[0].price;
		var setArr = [result[0].name,req.body.num,result[0].price,result[0].img,sum];
		conncetion.query(insertSql,setArr,function(err,ult){if(err) return console.error(err)
			conncetion.query(selectSql2,function(err,lt){
				res.send(lt)
			})
		})	
	})
});

module.exports = router;