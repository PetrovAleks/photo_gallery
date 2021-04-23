import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';

const tileData = [
	{
		img:
			'https://cdn.pixabay.com/photo/2020/12/07/02/26/buildings-5810399__340.jpg',
		title:
			'https://cdn.pixabay.com/photo/2020/12/07/02/26/buildings-5810399__340.jpg',
		author: 'author',
		like: 1,
	},
	{
		img:
			'https://cdn.pixabay.com/photo/2020/12/07/02/26/buildings-5810399__340.jpg',
		title:
			'https://cdn.pixabay.com/photo/2020/12/07/02/26/buildings-5810399__340.jpg',
		author: 'author',
		like: 1,
	},
	{
		img:
			'https://cdn.pixabay.com/photo/2020/12/07/02/26/buildings-5810399__340.jpg',
		title:
			'https://cdn.pixabay.com/photo/2020/12/07/02/26/buildings-5810399__340.jpg',
		author: 'author',
		like: 1,
	},
	{
		img:
			'https://cdn.pixabay.com/photo/2020/12/07/02/26/buildings-5810399__340.jpg',
		title:
			'https://cdn.pixabay.com/photo/2020/12/07/02/26/buildings-5810399__340.jpg',
		author: 'author',
		like: 1,
	},
	{
		img:
			'https://cdn.pixabay.com/photo/2020/12/07/02/26/buildings-5810399__340.jpg',
		title:
			'https://cdn.pixabay.com/photo/2020/12/07/02/26/buildings-5810399__340.jpg',
		author: 'author',
		like: 1,
	},
	{
		img:
			'https://cdn.pixabay.com/photo/2020/12/07/02/26/buildings-5810399__340.jpg',
		title:
			'https://cdn.pixabay.com/photo/2020/12/07/02/26/buildings-5810399__340.jpg',
		author: 'author',
		like: 1,
	},
];

const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
		flexWrap: 'wrap',
		justifyContent: 'space-around',
		overflow: 'hidden',
		backgroundColor: theme.palette.background.paper,
	},
	gridList: {
		width: 500,
		height: 450,
	},
	icon: {
		color: 'rgba(255, 255, 255, 0.54)',
	},
}));

export default function GridListPhotos() {
	const classes = useStyles();

	return (
		<div className="wrapper-gallery">
			<h2 className="title">Gallery</h2>
			<div className={classes.root}>
				<GridList cellHeight={180} className={classes.gridList}>
					<GridListTile
						key="Subheader"
						cols={2}
						style={{ height: 'auto' }}
					></GridListTile>
					{tileData.map((tile) => (
						<GridListTile key={tile.img}>
							<img src={tile.img} alt={tile.title} />
							<GridListTileBar
								title={tile.title}
								subtitle={<span>by: {tile.author}</span>}
								actionIcon={<button className="btn-like">+{tile.like}</button>}
							/>
						</GridListTile>
					))}
				</GridList>
			</div>
		</div>
	);
}
