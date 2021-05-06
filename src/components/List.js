import React from "react";

function List({ data }) {
	return (
		<div className="list">
			<p>{data.artistName}</p>
			<p>{data.artistViewUrl}</p>
			<p>{data.artworkUrl100}</p>
			<p>{data.kind}</p>
			<p>{data.releaseDate}</p>
			<p>{data.trackName}</p>
			<p>{data.trackTime}</p>
			<p>{data.trackPrice}</p>
		</div>
	);
}

export default List;
