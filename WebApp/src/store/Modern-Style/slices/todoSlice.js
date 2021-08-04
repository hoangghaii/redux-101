import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
	todos: [],
};

export const getTodos = createAsyncThunk("todos/getTodos", async () => {
	const response = await axios.get(
		"https://jsonplaceholder.typicode.com/todos?_limit=5"
	);
	return response.data;
});

export const markComplete = createAsyncThunk(
	"todos/markComplete",
	async (id) => {
		const response = await axios.put(
			`https://jsonplaceholder.typicode.com/todos/${id}`
		);
		return response.data.id;
	}
);

export const addTodo = createAsyncThunk("todos/addTodo", async (newTodo) => {
	const response = await axios.post(
		"https://jsonplaceholder.typicode.com/todos",
		newTodo
	);
	return response.data;
});

export const deleteTodo = createAsyncThunk("todos/deleteTodo", async (id) => {
	await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`);
	return id;
});

const todoSlice = createSlice({
	name: "todos",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(getTodos.fulfilled, (state = initialState, action) => {
				state.todos = action.payload;
			})
			.addCase(markComplete.fulfilled, (state = initialState, action) => {
				state.todos = state.todos.filter((todo) => {
					if (todo.id === action.payload) todo.completed = !todo.completed;
					return todo;
				});
			})
			.addCase(addTodo.fulfilled, (state = initialState, action) => {
				state.todos.push(action.payload);
			})
			.addCase(deleteTodo.fulfilled, (state = initialState, action) => {
				state.todos = state.todos.filter((todo) => todo.id !== action.payload);
			});
	},
});

export default todoSlice.reducer;
