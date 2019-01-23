var express = require("express");
const path = require('path')
// Import the model (burger.js) to use its database functions.
var burger = require("../models/burger.js");

var router = express.Router();

router.get('/', function(req, res){
    res.redirect('/burgers');
});

router.get('/burgers', function(req, res){
    burger.all(function(data){
        var hbsObject = {burgers: data};
        console.log(hbsObject);
        res.render('index', hbsObject);
    });
});




// creating new burger
router.post("/burgers/create", function(req, res) {
  burger.create([
    "burger_name", "devoured" //creating new burger
  ], [
    req.body.burger_name, "0"
  ], function(result) {
    // Send back the ID of the new burger
    // res.json({ id: result.insertId });
    res.redirect('/burgers');
  });
});

//updating 
router.put('/burgers/update/:id', function(req, res) {
    var condition ='id =' + req.params.id;
    
    console.log('condition', condition);

    burger.update({devoured: req.body.devoured}, condition, function () {
        res.redirect('/burgers');
    });
    
});


//deleting burger
// router.delete('/burgers/delete/:id', function(req, res) {
//   var condition = "id = " + req.params.id; //deleting the burger with the id
//     burger.delete(condition, function() { //pass in condition variable. then call back function that redirects to the main page
//         res.redirect('/');
//         //now include it in index.handlebars
//     });
// });

// Export routes for server.js to use.
module.exports = router;
