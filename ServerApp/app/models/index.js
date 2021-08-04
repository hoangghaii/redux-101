"use strict";

const Sequelize = require("sequelize");
const dbconfig = require("../configs/db.config.js");

let sequelize = new Sequelize(
	dbconfig.database,
	dbconfig.username,
	dbconfig.password,
	dbconfig
);

const db = {};

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.todos = require("./todos.js")(sequelize, Sequelize);

module.exports = db;
