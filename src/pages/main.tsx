import React from 'react';
import ListLikedPhotos from '../components/listLikedPhotos/listLikedPhotos';
import GridListPhotos from '../components/gridListPhotos/gridListPhotos';

import { state } from '../store/store';

const Main = () => {
	return (
		<main>
			<div className="container">
				<ListLikedPhotos />
				<GridListPhotos arrImg={state.likedImg} state={state} />
			</div>
		</main>
	);
};

export default Main;
