import React from "react";
import moment from "moment";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
	root: {
		minWidth: 275,
		backgroundColor: "#e3f2fd",
		marginBottom: 20,
	},
	// bullet: {
	// 	display: "inline-block",
	// 	margin: "0 2px",
	// 	transform: "scale(0.8)",
	// },
	title: {
		fontSize: 14,
	},
	pos: {
		marginBottom: 12,
	},
});

function List({ data }) {
	const classes = useStyles();
	const bull = <span className={classes.bullet}>•</span>;
	return (
		<Card className={classes.root}>
			<CardContent>
				<Typography
					className={classes.title}
					color="textSecondary"
					gutterBottom
				>
					{data.artistName}
				</Typography>
				<Typography variant="h5" component="h2">
					{data.trackName}
				</Typography>
				<Typography className={classes.pos} color="textSecondary">
					{moment(data.releaseDate).format("MMMM Do YYYY")}
				</Typography>
				<Typography variant="body2" component="p">
					Price {data.trackPrice}
				</Typography>
			</CardContent>
		</Card>
	);
}

export default List;
