const mysql=require("mysql");
const inquirer= require("inquirer");

let connection= mysql.createConnection({
    host:"localhost",
    port:3306,
    user:"root",
    password:"N4gGeS7",
    database:"top_songsDB"
});
connection.connect(function(err){
    if(err) throw err;
    search();
    
})
function search(){
    //prompt for what kind of search
    inquirer.prompt([
        {
            type:"list",
            name:"querySelect",
            message:"what would you like info on?",
            choices:[
                "songs by a certain artist",
                "artists with mulitple top songs",
                "songs within a certain range", 
                "one particular song"
            ]
        }
        //store answer in a promise
    ]).then(function(answer){
        //store the selection from the answer object in a variable
         answer= answer.querySelect;
         //if we are searching info on one song prompt what song
    if (answer==="one particular song"){
        inquirer.prompt([
            {
                type:"input",
                name:"songSelection",
                message:"what song?"
            }
            //hold this answer in another promisw
        ]).then(
            function(ans){
                //store the song the user is looking for in a variable
                 ans= ans.songSelection;
                 let query="SELECT song, artist, year FROM TopSongs WHERE ?";
                connection.query(query,{song:ans},function(err,res){
                    if (err) throw err;
                    console.log(res);
                    
                    connection.end();
                })
            }
        )

    }
    
    })
}
