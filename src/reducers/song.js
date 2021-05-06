import { GET_SONGS, GET_MORE_SONGS } from "../actions/types";

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
				songs: state.songs.concat(action.payload.results),
				offset: state.offset + 10,
			};
		case GET_MORE_SONGS:
			return {
				...state,
				songs: state.songs.concat(action.payload.results),
			};

		default:
			return state;
	}
}
