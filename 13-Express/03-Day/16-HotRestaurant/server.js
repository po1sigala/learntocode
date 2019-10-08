var express= require("express");
var path= require("path");

var app = express();
var PORT= 3000;

app.use(express.urlencoded({extended: true}));
app.use(express.json());

var reservations = [

]
var waitingList=[

]

//get requests
app.get("/", function(req, res){
    console.log(__dirname);
    res.sendFile(path.join(__dirname,"home.html"));
});
app.get("/reservations", function(req, res){
    console.log(__dirname);
    res.sendFile(path.join(__dirname,"reservations.html"));
})
app.get("/view", function(req, res){
    console.log(__dirname);
    res.sendFile(path.join(__dirname,"view.html"));
})

//post request accept json
// the req 
app.post("/api/reservations",function(req,res){
    var newRes=req.body;
    reservations.push(newRes);
    res.json(reservations);
})

//server start
app.listen(PORT, function(){
    console.log("app is listening on PORT "+PORT);
})