import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import galleryData from '../../store/dataImg';

import { state } from '../../store/store';

const MainSlider = (): JSX.Element => {
	const sliderImg = state.setRandomSliderImg(galleryData);
	sliderImg.length = 3;

	return (
		<div className="wrapper-slider container">
			<AwesomeSlider className="slider">{sliderImg}</AwesomeSlider>
		</div>
	);
};

export default MainSlider;
