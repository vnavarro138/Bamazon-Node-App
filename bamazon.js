var mysql = require("mysql");
var inquirer = require("inquirer");
require("console.table");
var bodyParser = require("body-parser");
// create the connection information for the sql database
var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "Beh3re2009",
  database: "bamazon_DB"
});
var productsPurchased = [];
// connect to the mysql server and sql database
  connection.connect(function(err) {
   if (err) throw err;
  //retrieve data from mySQL database
  connection.query('SELECT * FROM products', (err,results) => {
    if(err) throw err;
    console.table(results);
    start();
  //console.log('PRODUCT LIST:\n');
  //console.log(results);
  });
  // run the start function after the connection is made to prompt the user
  });


//function that shows table of items available

// function which prompts the user for what action they should take
function start() {
  inquirer
  .prompt({
    name: "id",
    type: "input",
    message: "Enter the ID number for the item you would like to purchase",
  })
    .then(function(res) {
  // based on their answer, either call the bid or the post functions
    connection.query("SELECT * FROM products WHERE id=?", res.id,(err, res) => { 
      if(err){
        console.log(err, "Please select a different product ID");
      }else {
        quantity(res);
    }
    
    });
 });
}

// function to handle posting new items up for auction
function quantity(item) {
  // prompt for info about the item being put up for auction
  inquirer
      .prompt({
      name: "quantity",
      type: "input",
      message: "Enter the quantity of this item you would like to purchase",
    })
    .then(function(answer) {
      // when finished prompting, insert a new item into the db with that info
      connection.query(
        "SELECT * FROM products WHERE id=?", item[0].id, function(err, res){
          if(res[0].stock_quantity < parseInt(answer.quantity)){
          console.log('That product is out of stock!');
          connection.end();
 
        //otherwise if the stock amount available is more than or equal to the amount being asked for then the purchase is continued and the user is alerted of what items are being purchased, how much one item is and what the total amount is
          }else {
            console.log(answer.quantity + ' items purchased');
            //this creates the variable SaleTotal that contains the total amount the user is paying for this total purchase
            var saleTotal = res[0].price * parseInt(answer.quantity);
            console.log("Your total is: " + saleTotal);
            var newStockQuantity = res[0].stock_quantity - parseInt(answer.quantity); 
            connection.query(
            "UPDATE products SET stock_quantity="+ newStockQuantity + " WHERE id=?", item[0].id, function(err, res){
              })
          //console.log(res[0].product_name + ' ' + res[0].price);
          start();
        }

      });

    });

};