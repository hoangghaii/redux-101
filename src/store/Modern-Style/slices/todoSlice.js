import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
	todos: [],
};

export const getTodos = createAsyncThunk("todos/getTodos", async () => {
	try {
		const response = await axios.get(
			"https://jsonplaceholder.typicode.com/todos?_limit=5"
		);
		return response.data;
	} catch (error) {
		console.log(error);
	}
});

export const markComplete = createAsyncThunk(
	"todos/markComplete",
	async (id) => {
		try {
			const response = await axios.put(
				`https://jsonplaceholder.typicode.com/todos/${id}`
			);
			return response.data.id;
		} catch (error) {
			console.log(error);
		}
	}
);

export const addTodo = createAsyncThunk("todos/addTodo", async (newTodo) => {
	try {
		const response = await axios.post(
			"https://jsonplaceholder.typicode.com/todos",
			newTodo
		);
		return response.data;
	} catch (error) {
		console.log(error);
	}
});

export const deleteTodo = createAsyncThunk("todos/deleteTodo", async (id) => {
	try {
		await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`);
		return id;
	} catch (error) {
		console.log(error);
	}
});

const todoSlice = createSlice({
	name: "todos",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(getTodos.fulfilled, (state = initialState, action) => {
				return { ...state, todos: action.payload };
			})
			.addCase(markComplete.fulfilled, (state = initialState, action) => {
				// return {
				// 	todos: state.todos.map((todo) => {
				// 		if (todo.id === action.payload) todo.completed = !todo.completed;
				// 		return todo;
				// 	}),
				// };
				return {
					...state,
					todos: state.todos.filter((todo) => todo.id !== action.payload),
				};
			})
			.addCase(addTodo.fulfilled, (state = initialState, action) => {
				return { ...state, todos: [...state.todos, action.payload] };
			})
			.addCase(deleteTodo.fulfilled, (state = initialState, action) => {
				return {
					...state,
					todos: state.todos.filter((todo) => todo.id !== action.payload),
				};
			});
	},
});

export default todoSlice.reducer;
