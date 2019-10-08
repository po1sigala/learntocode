// Dependencies
var express = require("express");
var exphbs = require("express-handlebars");

// Create an instance of the express app.
var app = express();

// Set the port of our application
// process.env.PORT lets the port be set by Heroku
var PORT = process.env.PORT || 8080;

//instead of a db im just making an array
var icecreams = [
    {name: 'vanilla', price: 10, awesomeness: 3},
    {name: 'chocolate', price: 4, awesomeness: 8},
    {name: 'banana', price: 1, awesomeness: 1},
    {name: 'greentea', price: 5, awesomeness: 7},
    {name: 'jawbreakers', price: 6, awesomeness: 2},
  ];
// Set Handlebars as the default templating engine.
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//routes
app.get("/icecream/:name", function(req,res){
    //loop  through icecreams object a
    for(i=0;i<icecreams.length;i++){
        //see if the current onject in the array matches the name of the search
        if(icecreams[i].name=== req.params.name){
            return res.render("icecream", icecreams[i]);
        }
    }
});
// app.get("/icreams", function(req,res){
//     res.render()
// })

app.listen(PORT,function(){
    console.log("server listening on PORT: "+ PORT);
})
