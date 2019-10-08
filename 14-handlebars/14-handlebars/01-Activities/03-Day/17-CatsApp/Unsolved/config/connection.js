// Set up MySQL .
//step 2. of setting up the app from scratch connection will store the connection to mysql and run a connect function

//require myql to access the db's
var mysql = require("mysql");

//create a variable to store the create connection method called upoon mysql
var connection = mysql.createConnection({
  //credentials which are run through the create connection method
  host: "localhost",
  port: 3306,
  user: "root",
  password: "",
  database: "cat_db"
});

// Make connection.
connection.connect(function(err) {
  //throw an error if there was an issue with our connection to the server
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export every instance of connection
module.exports = connection;


/* just to clarify my own understanding. in the above code writing connection.connect() is the same as saying
  require("mysql").createConnection("insert log in stuff here").connect(function(err{"connection stuff in here"}))
*/