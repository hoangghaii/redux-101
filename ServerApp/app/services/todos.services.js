const db = require("../models");
const _ = require("lodash");
const Todos = db.todos;

exports.getAllTodo = async (limit) => {
	try {
		const todos = await Todos.findAll(limit && { limit: parseInt(limit) });
		return todos;
	} catch (error) {
		return error;
	}
};

exports.createTodo = async (title) => {
	try {
		const todo = await Todos.create({
			userId: 2,
			title: title,
			completed: false,
		});
		return todo;
	} catch (error) {
		return error;
	}
};

exports.updateTodo = async (id) => {
	try {
		const todo = await Todos.findOne({
			where: {
				id: parseInt(id),
			},
		});
		if (_.isEmpty(todo)) {
			return { status: 404, success: false, message: "Can not find todo!" };
		} else {
			await Todos.update(
				{ completed: !todo.completed },
				{ where: { id: parseInt(id) } }
			);
			return { status: 200, success: true, message: "Update Todo Successfully!" };
		}
	} catch (error) {
		return error;
	}
};

exports.deleteTodo = async (id) => {
	try {
		const todo = await Todos.findOne({
			where: {
				id: parseInt(id),
			},
		});
		if (_.isEmpty(todo)) {
			return { status: 404, success: false, message: "Can not find todo!" };
		} else {
			await Todos.destroy({ where: { id: parseInt(id) } });
			return { status: 200, success: true, message: "Deleted Successfully!" };
		}
	} catch (error) {
		return error;
	}
};
