var orm = require("../config/orm.js");

orm.selectAll();

orm.insertOne("Chili Burger")
orm.updateOne("Pastrami Burger");

// module.exports = burgerFile;