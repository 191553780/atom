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
      res.render('stores', { data: result,name:req.query.user});
  })
});

router.post('/', function(req, res, next) {
  // console.log(req.body);
  var name=req.body.name;
  var selectSql='SELECT pass FROM user WHERE user=\''+name+'\'';
  connection.query(selectSql,function(err,result){
  	
  	if(err) return console.error(err);
  	res.send(result);
  })

});




module.exports = router;