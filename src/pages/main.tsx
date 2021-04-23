import React from 'react';
import ListLikedPhotos from '../components/listLikedPhotos/listLikedPhotos';
import Card from '../components/card/card';

const Main = () => {
	return (
		<main>
			<div className="container">
				<ListLikedPhotos />
				<Card />
			</div>
		</main>
	);
};

export default Main;
