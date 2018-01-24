
// var express = require("express");

// var burgerFile = require("../models/burger.js");



// function router(app){

//     app.get("/index", function(req, res){
//         connection.query("SELECT * FROM burgers;", function(err, data) {
//             if (err) {
//               return res.status(500).end();
//             }
//             console.log(data);
//             // res.render("index", { burgers: data });
//           });
//         // res.render("index", { burgers: data });
//     })
    
//     // app.get("/html/route2", function(req, res){
//     //     res.end();
//     // })
    
//     }
// module.exports = router;

var express = require("express");

var router = express.Router();

// Import the model (burger.js) to use its database functions.
var burger = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  burger.all(function(data) {
    var hbsObject = {
      burgers: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/api/burgers", function(req, res) {
  burger.create([
    "burger_name", "devoured"

  ], [
    req.body.name, false
  ], function(result) {
    // Send back the ID of the new quote
    res.json({ id: result.insertId });
  });
});

router.put("/api/burgers/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  burger.update({
    devoured: req.body.devoured
  }, condition, function(result) {
    if (result.changedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

// router.delete("/api/burgers/:id", function(req, res) {
//     var condition = "id = " + req.params.id;
//     console.log("req.params.id " + req.params.id)
  
//     console.log("condition", condition);
  
//     burger.delete(
//      condition, function(result) {
//       if (result.affectedRows == 0) {
//         // If no rows were changed, then the ID must not exist, so 404
//         return res.status(404).end();
//       } else {
//         res.status(200).end();
//       }
//     });
//   });

// Export routes for server.js to use.
module.exports = router;
