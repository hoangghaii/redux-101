const initialState = {
	todos: [
		{
			id: 1,
			title: "Viec 1",
			completed: false,
		},
		{
			id: 2,
			title: "Viec 2",
			completed: false,
		},
		{
			id: 3,
			title: "Viec 3",
			completed: false,
		},
	],
};

const todoReducer = (state = initialState, { type, payload }) => {
	// switch (type) {
	// case typeName:
	//   return { ...state, ...payload }
	// default:
	//   return state
	// }
	return state;
};

export default todoReducer;
