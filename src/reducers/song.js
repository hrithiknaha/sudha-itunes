import { GET_SONGS } from "../actions/types";

const isEmpty = require("is-empty");

const initialState = {
	loading: true,
	offset: 0,
	songs: [],
};

export default function (state = initialState, action) {
	switch (action.type) {
		case GET_SONGS:
			return {
				...state,
				loading: isEmpty(action.payload),
				songs: action.payload,
				offset: state.offset + 10,
			};
		default:
			return state;
	}
}
