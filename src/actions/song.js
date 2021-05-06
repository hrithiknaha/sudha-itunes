import axios from "axios";
import { GET_SONGS } from "./types";

export const getSongs = (slug) => (dispatch, getState) => {
	// console.log(slug);
	// const keyword = slug.split(" ");
	// // console.log(keyword);
	// const search = keyword.join("+");
	// console.log(search);

	const { offset } = getState().songs;

	console.log(offset);

	const url = `https://itunes.apple.com/search?term=shakira&media=music&limit=10&offset=${offset}`;
	// const url = `https://itunes.apple.com/search?term=${search}&media=music&limit=10&offset=${offset}}`;
	// const url = `https://itunes.apple.com/search?term=${search}&entity=album`;
	// console.log(url);
	axios.get(url).then((res) => {
		console.log(res.data);
		dispatch({
			type: GET_SONGS,
			payload: res.data,
		});
	});
};
