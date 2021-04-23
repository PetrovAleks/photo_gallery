import React from 'react';
import MainSlider from '../components/slider/slider';
import GridListPhotos from '../components/gridListPhotos/gridListPhotos';

const Discover = () => {
	return (
		<section className="discover">
			<div className="container">
				<MainSlider />
				<GridListPhotos />
			</div>
		</section>
	);
};

export default Discover;
