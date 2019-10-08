var inquirer= require("inquirer")
inquirer
    .prompt([
        //ask for user to create a log in 
        {
            type: "input",
            message: "create a log-in name",
            name: "username"
        },
        {
            type:"password",
            message: "create a password",
            name: "password"
        }
    ]).then(
        function(inquirerResponse){
          
                console.log("\nWelcome" +inquirerResponse.username);
            
        }
    )