const controller = require("../controllers/todos.controllers");

module.exports = function (app) {
	app.use(function (req, res, next) {
		res.header("Access-Control-Allow-Origin", "*");
		res.header(
			"Access-Control-Allow-Headers",
			"Origin, X-Requested-With, Content-Type, Accept"
		);
		next();
	});

	app.get("/api/todos", controller.getAll);
	app.post("/api/todos", controller.createTodo);
	app.put("/api/todos/:id", controller.updateTodo);
	app.delete("/api/todos/:id", controller.deleteTodo);
};
