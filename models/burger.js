const orm = require("../config/orm");

orm.selectAll("burger_name", "burgers");

orm.insertBurger("burgers", "burger_name", ); //get burger name

orm.updateBurger("burgers", "burger_name", ); // get burger name

