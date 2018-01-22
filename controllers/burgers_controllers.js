
var express = require("express");

var burgerFile = require("../models/burger.js");



function router(app){

    app.get("/html/friends", function(req, res){
        res.end();
    })
    
    app.get("/html/route2", function(req, res){
        res.end();
    })
    
    }
    
module.exports = router;