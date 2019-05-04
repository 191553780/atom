var express = require('express');
var router = express.Router();

var url = require('url')

var mysql = require('mysql');
var db = require('./../config/db');

var conncetion = mysql.createConnection(db.mysqlDb);
conncetion.connect();


/* GET home page. */
router.get('/', function(req, res, next) {
	var name = url.parse(req.query.name).pathname
	// console.log(name)
	var sql = 'select * from products where name = "'+name+'"'
	// console.log(sql)
	conncetion.query(sql,function(err,result){
		// console.log(result)
		res.render('archives', {result:result});
	})
});
router.post('/', function(req, res, next) {
	var id = req.body.id
	var sql = 'select * from products where id = "'+id+'"'
	conncetion.query(sql,function(err,result){
		res.send(result);
	})
});

module.exports = router;