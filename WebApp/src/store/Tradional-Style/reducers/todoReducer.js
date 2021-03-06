const initialState = {
	todos: [],
};

const todoReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case "GET_TODOS":
			return { ...state, todos: payload };
		case "MARK_COMPLETE":
			return {
				...state,
				todos: state.todos.map((todo) => {
					if (todo.id === payload) todo.completed = !todo.completed;
					return todo;
				}),
			};
		case "ADD_TODO":
			return { ...state, todos: [...state.todos, payload] };

		case "DELETE_TODO":
			return {
				...state,
				todos: state.todos.filter((todo) => todo.id !== payload),
			};
		default:
			return state;
	}
};

export default todoReducer;
