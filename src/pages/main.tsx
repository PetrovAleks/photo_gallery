import React from 'react';
import ListLikedPhotos from '../components/listLikedPhotos/listLikedPhotos';
import GridListPhotos from '../components/gridListPhotos/gridListPhotos';

import { state } from '../store/store';

const Main = (): JSX.Element => {
	state.sortByLikes();
	return (
		<main>
			<div className="container">
				<div className="main-wrapper">
					<ListLikedPhotos />
					<GridListPhotos arrImg={state.topImg} state={state} />
				</div>
			</div>
		</main>
	);
};

export default Main;
