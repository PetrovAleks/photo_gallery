import React from 'react';
import ListLikedPhotos from '../components/listLikedPhotos/listLikedPhotos';

const Main = () => {
	return (
		<main>
			<section>
				<div className="container">
					<ListLikedPhotos />
				</div>
			</section>
		</main>
	);
};

export default Main;
