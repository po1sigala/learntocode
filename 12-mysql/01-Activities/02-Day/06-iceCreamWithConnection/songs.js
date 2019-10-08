var mysql= require("mysql");

var connection= mysql.createConnection({
    host: "localhost",
    port: 3306,
    user:"root",
    password:"N4gGeS7",
    database:"songDB"
});

connection.connect(function(err){
    if (err) throw err;
    console.log("connected as id "+ connection.threadId);
    
    insertions();
    updates();
    deletions();
    reads();
    afterconnect();
    connection.end();
})

function afterconnect(){
    connection.query("SELECT * FROM songs", function(err,data){
        if(err) throw err;
        console.log(data);
    })
}
function insertions(){
console.log("inserting new song... \n");
var query= connection.query(
    "INSERT INTO songs SET ?",
    {
        title:"yeah",
        artist: "Usher",
        genre: "Hip Hop"
    },
    function(err,res){
        console.log(res.affectedRows+" song inserted!\n");
        
    }
    )
}

function updates(){

}

function deletions(){

}
function reads(){

}