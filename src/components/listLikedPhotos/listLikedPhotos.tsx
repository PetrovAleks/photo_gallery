import React from 'react';
import { IStorageImg } from '../../store/store';

const ListLikedPhotos = (props: any) => {
	const list = props.listLiked.map((el: IStorageImg) => {
		return (
			<li key={el.id} className="liked-photos__item">
				{el.author}
			</li>
		);
	});
	return (
		<section className="liked-photos">
			<div className="wrapper-liked-photos">
				<h2 className="title">List Liked</h2>
				<ul className="liked-photos__list list-style">{list}</ul>
			</div>
		</section>
	);
};

export default ListLikedPhotos;
