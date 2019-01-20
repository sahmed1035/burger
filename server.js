var express = require("express");

var app = express();
var PORT = 3000;


// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
  // Log (server-side) when our server has started
  console.log("Burger Server listening on: http://localhost:" + PORT);
});
