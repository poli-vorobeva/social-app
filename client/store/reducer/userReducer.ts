import {HYDRATE} from 'next-redux-wrapper';
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface IUserState {
	friends: { name: string, image: string }[]
	name: string
	age: string
	city: string
	education: string
	posts: { date: string, text: string }[]
}

const initialState: IUserState = {
	friends: [{name: 'JOU', image: ''},{name: 'MMMJOU', image: ''}],
	name: "UserName",
	age: "25",
	city: "SPB",
	education: "SOMY UNIW",
	posts: [{date: '345678', text: "TEXT"}]
};

export const UserSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		fetchValues(state: IUserState,action: PayloadAction<IUserState>) {
			state.friends=action.payload.friends
			state.age=action.payload.age
			state.city=action.payload.city
			state.education=action.payload.education
			state.name=action.payload.name
			state.posts=action.payload.posts
		},

	},
	extraReducers: {
		[HYDRATE]: (state, action) => {
			return {
				...state,
				...action.payload,
			};
		},
	},
});

export default UserSlice.reducer;