var express = require('express');
var router = express.Router();
var mysql=require('mysql');
var db=require('./../public/Separation/db.js');

var connection=mysql.createConnection(db.mysqlDB);
  connection.connect();

router.post('/', function(req, res, next) {
  // console.log(req.body);
  var name=req.body.user;
  var pass=req.body.pass;
  var insertSql='INSERT INTO user(user,pass) VALUE(?,?)';
  var insertdata=[name,pass];
  connection.query(insertSql,insertdata,function(err,ult){
  	if(err) return console.error(err);
    var selectSql = "SELECT * FROM products"; 
    connection.query(selectSql,function(err,result){
      if(ult.insertId){ 
        res.render('stores', { data: result,name:name});
     }else{
         res.render('stores',{ data: result,name:''});
     }
     })
  })


});


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('stores', { title: 'Express' });
});



module.exports = router;