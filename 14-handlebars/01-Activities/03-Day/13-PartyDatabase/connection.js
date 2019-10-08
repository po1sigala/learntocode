var mysql= require("mysql");
var connection= mysql.createConnection({
    host:"localhost",
    port:3306,
    password:"N4gGeS7",
    database:"parties_db"
});
//mysql.createConnection("localhost",3306,"N4gGeS7","parties_db").connect
connection.connect(function(err){
    if(err) throw err;
    console.log("connected as id: "+ connection.threadId);
});

module.exports=connection;