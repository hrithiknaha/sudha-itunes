import React, { useState } from "react";
import { connect } from "react-redux";

import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

import { getSongs } from "../actions/song";
function Searchbar(props) {
	const [text, setSearchtext] = useState("");

	const fetchData = () => {
		props.getSongs(text);
	};

	console.log(props.songs);
	function handleSearchChange(e) {
		setSearchtext(e.target.value);
	}
	return (
		<div>
			<form>
				<TextField
					id="standard-basic"
					label="Standard"
					onChange={handleSearchChange}
				/>
				<Button variant="contained" onClick={fetchData}>
					Default
				</Button>
			</form>
		</div>
	);
}

const mapStateToProps = (state) => ({
	songs: state.songs,
});

export default connect(mapStateToProps, { getSongs })(Searchbar);
