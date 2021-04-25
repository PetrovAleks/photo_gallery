import React from 'react';
import MainSlider from '../components/slider/slider';
import GridListPhotos from '../components/gridListPhotos/gridListPhotos';
import { state } from '../store/store';
const Discover = () => {
	return (
		<section className="discover">
			<div className="container">
				<MainSlider />
				<GridListPhotos arrImg={state.galleryList} state={state} />
			</div>
		</section>
	);
};

export default Discover;
