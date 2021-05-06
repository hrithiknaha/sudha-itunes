import React from "react";

function List({ data }) {
	return (
		<div className="list">
			<p>Artist Name {data.artistName}</p>
			<img src={data.artworkUrl100} alt="artowork" />
			<p>{data.kind}</p>
			<p>{data.releaseDate}</p>
			<p>{data.trackName}</p>
			<p>{data.trackTime}</p>
			<p>{data.trackPrice}</p>
		</div>
	);
}

export default List;
