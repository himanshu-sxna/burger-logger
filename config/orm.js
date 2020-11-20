const connection = require("./connection");


let orm = {
    selectAllBurgers: function(tableName, cb) {
        let queryString = "SELECT * FROM ??";
        connection.query(queryString, [tableName], function(err, result) {
            if(err) throw err;
            cb(result);
        });
    },
    insertBurger: function(tableName, colName, burgerName, cb) {
        let queryString = "INSERT INTO ?? (??) VALUES (?)";
        connection.query(queryString, [tableName, colName, burgerName], function(err, result) {
            if(err) throw err;
            cb(result); 
        });
    },
    updateBurger: function(tableName, colName, burgerName, cb) {
        let queryString = "UPDATE ?? SET devoured = true WHERE ?? = ?";
        connection.query(queryString, [tableName, colName, burgerName], function(err, result) {
            if(err) throw err;
            cb(result);
        });
    }
};

module.exports = orm;