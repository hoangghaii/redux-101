import axios from "axios";

const baseUrl = process.env.REACT_APP_BASE_URL;

export const getTodos = () => async (dispatch) => {
	try {
		const response = await axios.get(`${baseUrl}?_limit=5`);
		dispatch({ type: "GET_TODOS", payload: response.data.todos });
	} catch (error) {
		console.log(error);
	}
};

export const markComplete = (id) => async (dispatch) => {
	try {
		await axios.put(`${baseUrl}/${id}`);
		dispatch({ type: "MARK_COMPLETE", payload: id });
	} catch (error) {
		console.log(error);
	}
};

export const addTodo = (newTodo) => async (dispatch) => {
	try {
		const response = await axios.post(baseUrl, newTodo);
		dispatch({ type: "ADD_TODO", payload: response.data.todo });
	} catch (error) {
		console.log(error);
	}
};

export const deleteTodo = (id) => async (dispatch) => {
	try {
		await axios.delete(`${baseUrl}/${id}`);
		dispatch({ type: "DELETE_TODO", payload: id });
	} catch (error) {
		console.log(error);
	}
};
