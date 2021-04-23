import React from 'react';
import ListLikedPhotos from '../components/listLikedPhotos/listLikedPhotos';
import GridListPhotos from '../components/gridListPhotos/gridListPhotos';

const Main = () => {
	return (
		<main>
			<div className="container">
				<ListLikedPhotos />
				<GridListPhotos />
			</div>
		</main>
	);
};

export default Main;
