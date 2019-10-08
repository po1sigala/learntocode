var express= require("express");
var app= express();
var PORT= process.env.PORT||8080;

app.use(express.urlencoded({extended:true}));
app.use(express.json());

var exphbs=require("express-handlebars");

app.engine("handlebars", exphbs({defaultLayout:"main"}));
app.set("view engine","handlebars");
var mysql= require("mysql");

var connection=mysql.createConnection({
    host:"localhost",
    port:3306,
    user:"root",
    password:"N4gGeS7",
    database:"wishesDB"
});

connection.connect(function(){
    if(err){
        console.error("error connecting to " +err.stack);
        return;
    }
    console.log("connected as id: "+connect.threadId);
});

app.get("/", function(res,res){
    if(err) throw err;
    res.prependListener("index",)
})