const express = require("express");
const burgers = require("../models/burger");
const burger = require("../models/burger");

const router = express.Router();

router.get("/", function(req, res) {

    burger.allBurgers(function(data){
        let handlebarObj  = {
            burgers:data
        };
        res.render("index", handlebarObj);
    })
})

router.post("/api/update/:burger_name", function(req, res) {

    let burgerToUpdate = req.params.burger_name;
    
    burger.devourBurger(burgerToUpdate, function(result){
        if(result.changedRows !== 1){
            return res.status(404).end();
        }else {
            res.status(200).end();
        }
    });
})

router.post("/api/create/:newBurger", function (req, res) {

    let newBurger = req.params.newBurger;

    burger.createBurger(newBurger, function(result) {
        if(result.affectedRows !== 1){
            return res.status(404).end();
        }else {
            res.status(200).end();
        }
    });
})

module.exports = router;