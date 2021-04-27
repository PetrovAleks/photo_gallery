import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';

const MainSlider = () => {
	const styles = {
		'$slider-height-percentage': '10%',
	};
	return (
		<div className="wrapper-slider container">
			<AwesomeSlider cssModule={styles}>
				<div className="slider-item">
					<img
						src="https://cdn.pixabay.com/photo/2017/06/18/18/26/holi-2416686_960_720.jpg"
						alt="e"
					/>
				</div>
				<div className="slider-item">
					<img
						src="https://cdn.pixabay.com/photo/2020/09/02/11/04/landscape-5538015__340.jpg"
						alt="e"
					/>
				</div>
			</AwesomeSlider>
		</div>
	);
};

export default MainSlider;
