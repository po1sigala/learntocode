var mysql= require("mysql")

var connection= mysql.createConnection({
    host:"localhost",
    port:3306,
    user:"root",
    password:"N4gGeS7",
    database:"collegesDB"
});

connection.connect(function(err){
    if (err) throw err;
    displayTable();
})

function displayTable(){
    connection.query("SELECT * FROM colleges", function(err, data){
        if (err) throw err;
        console.log(data);
    })
}