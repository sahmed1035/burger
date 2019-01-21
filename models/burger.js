// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js"); //all the sql code is in this file

/***Going to collect data using ORM. Send it into burger.js. And use burger.js in order to send that data to the 
 * frond-end.
 */

var burger = {
  all: function(cb) {
    orm.all("burgers", function(res) { //grabs all the burgers from the database
      cb(res); //call back sending in to controller
    });
  },
  // The variables cols and vals are arrays.
  create: function(cols, vals, cb) { //create a new burger in the database
    orm.create("burgers", cols, vals, function(res) {
      cb(res);
    });
  },
  update: function(objColVals, condition, cb) { //update a burger within our database
    orm.update("burgers", objColVals, condition, function(res) {
      cb(res);
    });
  },
  delete: function(condition, cb) { //delete a burger within our database from burgers table
    orm.delete("burgers", condition, function(res) { 
      cb(res);
    });
  }
};

// Export the database functions for the controller burgers_controller.js).
module.exports = burger;
