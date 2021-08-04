import axios from "axios";

export const getTodos = () => async (dispatch) => {
	try {
		const response = await axios.get(
			"https://jsonplaceholder.typicode.com/todos?_limit=5"
		);
		dispatch({ type: "GET_TODOS", payload: response.data });
	} catch (error) {
		console.log(error);
	}
};

export const markComplete = (id) => async (dispatch) => {
	try {
		await axios.put(`https://jsonplaceholder.typicode.com/todos/${id}`);
		dispatch({ type: "MARK_COMPLETE", payload: id });
	} catch (error) {
		console.log(error);
	}
};

export const addTodo = (newTodo) => async (dispatch) => {
	try {
		await axios.post("https://jsonplaceholder.typicode.com/todos", newTodo);
		dispatch({ type: "ADD_TODO", payload: newTodo });
	} catch (error) {
		console.log(error);
	}
};

export const deleteTodo = (id) => async (dispatch) => {
	try {
		await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`);
		dispatch({ type: "DELETE_TODO", payload: id });
	} catch (error) {
		console.log(error);
	}
};
