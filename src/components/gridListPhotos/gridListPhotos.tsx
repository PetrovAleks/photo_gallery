import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';

import { observer } from 'mobx-react';
import { IStorageImg, IProps } from '../../store/store';

const GridListPhotos = observer(
	({ state, arrImg }: IProps): JSX.Element => {
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
		const classes = useStyles();

		const { toggleLike, setPopupImg, addFavoriteImg } = state;

		return (
			<section className="gallery">
				<h2 className="title">Gallery</h2>
				<div className={classes.root}>
					<GridList cellHeight={180} className={classes.gridList}>
						{arrImg.map((tile: IStorageImg) => (
							<GridListTile key={tile.id}>
								<img src={tile.img} alt={tile.title} onClick={() => setPopupImg(tile)} />
								<GridListTileBar
									title={tile.title}
									subtitle={<span>by: {tile.author}</span>}
									actionIcon={
										<button
											className={`btn-like ${tile.liked ? 'btn-like--active' : null}`}
											onClick={(): void => {
												toggleLike(tile);
												addFavoriteImg(tile);
											}}
										>
											+{tile.like}
										</button>
									}
								/>
							</GridListTile>
						))}
					</GridList>
				</div>
			</section>
		);
	},
);

export default GridListPhotos;
