import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface createTodoListType {
	id: number;
	title: string;
	date: string;
	img: string;
}

const initialState: { data: createTodoListType[] } = {
	data: [],
};

const todoList = createSlice({
	name: "todolist",
	initialState,
	reducers: {
		addTodoList: (state, action: PayloadAction<{title: string, date: string, img: string}>) => {
			const newData = {
				id: Date.now(),
				title: action.payload.title,
				date: action.payload.date,
				img: action.payload.img,
			};
			state.data.push(newData);
		},
		deleteCards: (state, action: PayloadAction<{ id: number }>) => {
			state.data = state.data.filter((item) => item.id !== action.payload.id);
		},
		deleteAll: (state, action: PayloadAction<{ id: number }>) => {
			state.data = state.data.filter((item) => item.id === action.payload.id);
		},
		sameResults: (
			state,
			action: PayloadAction<{
				id: number;
				title: string;
				date: string;
				img: string;
			}>
		) => {
			state.data =  state.data.map((item) =>
				item.id === action.payload.id
					? {
							...item,
							title: action.payload.title,
							date: action.payload.date,
							img: action.payload.img,
					}
					: item
			);
		},
	},
});

export const { addTodoList, deleteCards, deleteAll, sameResults } =
	todoList.actions;
export const todoReducer = todoList.reducer;
