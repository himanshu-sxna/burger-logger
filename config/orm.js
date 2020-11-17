const connection = require("./connection");


let orm = {
    selectAll: function(colName, tableName) {
        let queryString = "SELECT ?? FROM ??";
        connection.query(queryString, [colName, tableName], function(err, result) {
            if(err) throw err;
            console.log(result); 
        });
    },
    insertBurger: function(tableName, colName, burgerName ) {
        let queryString = "INSERT INTO ?? (??) VALUES ?";
        connection.query(queryString, [tableName, colName, burgerName], function(err, result) {
            if(err) throw err;
            console.log(result); 
        });
    },
    updateBurger: function(tableName, colName, burgerName ) {
        let queryString = "UPDATE ?? SET devoured = true WHERE ?? = ?";
        connection.query(queryString, [tableName, colName, burgerName], function(err, result) {
            if(err) throw err;
            console.log(result); 
        });
    }
};

module.exports = orm;