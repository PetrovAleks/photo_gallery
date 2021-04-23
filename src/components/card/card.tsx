import React from 'react';
import Cards from '@material-ui/core/Card';

const Card = () => {
	return (
		<section className="top-photos">
			<h2 className="title">Top photos</h2>
			<Cards>
				<div className="wrapper-card-img">
					<div className="card-info">
						<h3 className="card-title">Name</h3>
						<p className="card-like">like</p>
					</div>
					<img
						className="card-img"
						src="https://cdn.pixabay.com/photo/2020/11/30/17/21/businessman-5791566_960_720.jpg"
						alt="name"
					/>
				</div>
			</Cards>
		</section>
	);
};

export default Card;
