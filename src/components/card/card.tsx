import React from 'react';
import Cards from '@material-ui/core/Card';

const Card = () => {
	return (
		<section className="top-photos">
			<h2 className="title">Top photos</h2>
			<Cards>
				<div className="wrapper-card-img">
					<img
						className="card-img"
						src="https://cdn.pixabay.com/photo/2021/04/13/19/41/elephants-6176590_1280.jpg"
						alt="slon"
					/>
				</div>
			</Cards>
		</section>
	);
};

export default Card;
