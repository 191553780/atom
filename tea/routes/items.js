var express = require('express');
var router = express.Router();
var url = require('url');
var mysql = require('mysql');
var db = require('./../config/db');

var conncetion = mysql.createConnection(db.mysqlDb);
conncetion.connect();

/* GET home page. */
router.get('/', function(req, res, next) {
	var str = req.url;
	var obj = url.parse(str,true,true)
	var selectSql = "SELECT * FROM products WHERE name ='"+obj.query.name+"'";
	var selectSql2 = "SELECT * FROM products WHERE name != '"+obj.query.name+"' and type = '"+obj.query.type+"' LIMIT 6";
	var data,typeData;
	conncetion.query(selectSql,function(err,result){
			data = result;	
		conncetion.query(selectSql2,function(err,result){
			typeData = result;	
			res.render('items', { data: data,type:typeData });
		})
	})
});

router.post('/',function(req,res,next){
	var selectSql = "SELECT * FROM products WHERE type ='"+req.body.type+"'";
	conncetion.query(selectSql,function(err,result){
		res.send(result)
	})
});

module.exports = router;
