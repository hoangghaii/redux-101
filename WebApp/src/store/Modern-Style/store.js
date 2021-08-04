import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "store/Modern-Style/slices/todoSlice";

const rootReducer = {
	todos: todoReducer,
};

const modernStore = configureStore({
	reducer: rootReducer,
});

export default modernStore;
