import React from 'react';
import ListLikedPhotos from '../components/listLikedPhotos/listLikedPhotos';
import GridListPhotos from '../components/gridListPhotos/gridListPhotos';

import { state } from '../store/store';

const Main = () => {
	const liked = state.galleryList.filter((el) => el.liked);
	return (
		<main>
			<div className="container">
				<ListLikedPhotos listLiked={liked} />
				<GridListPhotos arrImg={liked} state={state} />
			</div>
		</main>
	);
};

export default Main;
