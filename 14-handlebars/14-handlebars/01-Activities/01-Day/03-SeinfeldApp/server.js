var express = require("express");
var mysql = require("mysql");

var app= express();

var PORT = 8080

var connection= mysql.createConnection({
    host:"localhost",
    port:3306,
    user:"root",
    password: "N4gGeS7",
    database:"seinfeild_db"
});

connection.connect(function(err){
    if(err){
        console.error("Error connecting: "+ err.stack);
        return
    }
    console.log("connected as id "+ connection.threadId);
});

//routes
//home
app.get("/cast", function(req,res){
    connection.query("SELECT * FROM actors",function(err,result){
        var html= "<h1> Seinfeild Characters </h1>";

        html+="<ul>";

        for(i=0;i<result.length;i++){
            html+= "<li><p> ID: "+result[i].id+"</p>";
            html+="<p>Actor: "+result[i].name+"</p>";
            html+= "<p>Coolness: "+result[i].coolness_points+"</p>";
            html+="<p>attitude: "+result[i].attitude+"</p>";
        }
        html+="</ul>";

        res.send(html);
    });
    
});
app.get("/coolness", function(req,res){
    connection.query("SELECT")
})

app.listen(PORT, function(){
    console.log("Server lisetning on PORT: " +PORT);
})