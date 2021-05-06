import React from "react";
import Searchbar from "./Searchbar";
import List from "./List";

import isEmpty from "is-empty";

import { connect } from "react-redux";

function Home(props) {
	return (
		<div>
			<Searchbar />
			{!props.data.loading && !isEmpty(props.data.songs.results) ? (
				props.data.songs.results.map((song) => {
					return <List key={song.trackId} data={song} />;
				})
			) : (
				<div>No result</div>
			)}
		</div>
	);
}

const mapStateToProps = (state) => ({
	data: state.songs,
});

export default connect(mapStateToProps)(Home);
