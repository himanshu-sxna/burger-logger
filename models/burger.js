const orm = require("../config/orm");


let burgers = {

    allBurgers: function(cb) {
        orm.selectAllBurgers("burgers", function(res){
            cb(res);
        });
    },
    
    devourBurger: function(burgerName,cb) {
        orm.updateBurger("burgers", "burger_name", burgerName, function(res){
            cb(res);
        } )
    },

    createBurger: function(burgerName,cb){
        orm.insertBurger("burgers", "burger_name", burgerName, function(res) {
            cb(res);
        });
    }
};


module.exports = burgers;