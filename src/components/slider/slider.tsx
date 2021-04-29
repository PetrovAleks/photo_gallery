import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import galleryData from '../../store/dataImg';

const MainSlider = (): JSX.Element => {
	const sliderImg = galleryData.map(
		(el): JSX.Element => {
			return (
				<div className="slider-item">
					<img src={el.img} alt={el.title} width="100%" />
				</div>
			);
		},
	);
	sliderImg.length = 3;

	return (
		<div className="wrapper-slider container">
			<AwesomeSlider className="slider">{sliderImg}</AwesomeSlider>
		</div>
	);
};

export default MainSlider;
