import React from 'react';

const ListLikedPhotos = () => {
	return (
		<section className="liked-photos">
			<div className="wrapper-liked-photos">
				<h2 className="title">List Liked</h2>
				<ul className="liked-photos__list list-style">
					<li className="liked-photos__item">Djon</li>
					<li className="liked-photos__item">Random</li>
				</ul>
			</div>
		</section>
	);
};

export default ListLikedPhotos;
