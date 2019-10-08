// Write code here to parse command line arguments and store them into variables
// Add code to print whether the user is searching for an actor or tv show, 
//along with the name of the actor or tv show they are searching for
var inquirer=require("inquirer");
inquirer
    .prompt([
        {
            type:"list",
            name:"doWhat",
            message:"What are you searching for?",
            choices:["I'm looking for an actor","I'm looking for a show"]

        }
        

    ])
        .then(function(response){
            var search=response.doWhat;
            if(search==="I'm looking for an actor"){
                console.log("I'm looking for an actor")
            }
            if(search==="I'm looking for a show"){
                console.log("I'm looking for a show")
            }
        })
