var express = require('express');
var router = express.Router();
var db= require('./../config/db.js');

var mysql = require('mysql');
var connection = mysql.createConnection(db.mysqlDb)
connection.connect();


router.get('/', function(req, res, next) {
  res.render('info', { title: 'Express' });
  // res.send('111');
});

/* GET home page. */
router.post('/', function(req, res, next) {
	var list = req.body.class;
	if(list==0){
		var selectSql = 'SELECT * FROM info;'
	}else{
		var selectSql = 'SELECT * FROM info WHERE class = '+list+' order by date desc'
	}
	// console.log(list)
	
	connection.query(selectSql,function(err,result){
    // console.log(result)
    if(err) return console.error(err)
    // if(result.length){
    //   // res.send()设置输出
    //   res.send('1');
    // }else{
      res.send(result);
    // }
  })
	
});

module.exports = router;