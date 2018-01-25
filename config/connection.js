// Set up MySQL connection.
var mysql = require("mysql");
var connection;

//mysql://xk2s5c9dk8yyhgpq:hlvv59cflua8t9xu@yhrz9vns005e0734.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306/coo1nnmg1rbwsdix
if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    port: 3306,
    host: "localhost",
    user: "root",
    password: "",
    database: "burgers_db"
  });
};


// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;