var express = require('express');
var router = express.Router();
var mysql=require('mysql');
var db=require('./../public/Separation/db.js');

var connection=mysql.createConnection(db.mysqlDB);
    connection.connect();

/* GET home page. */
router.get('/', function(req, res, next) {
  var selectSql = "SELECT * FROM products";
  connection.query(selectSql,function(err,result){
      res.render('stores', { data: result,name:''});
  })
});


router.post('/', function(req, res, next) {
  var name=req.body.name;
  var selectRegSql='SELECT * FROM user WHERE user=\''+name+'\'';
  connection.query(selectRegSql,function(err,result){
  	if(err) return console.error(err);
  	if(result.length){
  		res.send('you');
  	}else{
  		res.send('meiyou');
  	}
  })
});

module.exports = router;
