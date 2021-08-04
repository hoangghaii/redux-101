const {
	getAllTodo,
	createTodo,
	updateTodo,
	deleteTodo,
} = require("../services/todos.services");

exports.getAll = async (req, res) => {
	try {
		const { limit } = req.query;
		const todos = await getAllTodo(limit);

		return res
			.status(200)
			.json({ success: true, message: "Successfully!", todos });
	} catch (error) {
		return res.status(400).json({ success: false, message: error });
	}
};

exports.createTodo = async (req, res) => {
	try {
		const { title } = req.body;
		const todo = await createTodo(title);

		return res
			.status(200)
			.json({ success: true, message: "Create Todo Successfully!", todo });
	} catch (error) {
		return res.status(400).json({ success: false, message: error });
	}
};

exports.updateTodo = async (req, res) => {
	try {
		const id = req.params.id;
		const response = await updateTodo(id);

		return res
			.status(response.status)
			.json({ success: response.success, message: response.message });
	} catch (error) {
		return res.status(400).json({ success: false, message: error });
	}
};

exports.deleteTodo = async (req, res) => {
	try {
		const id = req.params.id;
		const response = await deleteTodo(id);
		return res
			.status(response.status)
			.json({ success: response.success, message: response.message });
	} catch (error) {
		return res.status(400).json({ success: false, message: error });
	}
};
