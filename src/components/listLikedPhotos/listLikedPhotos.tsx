import React from 'react';
import { IStorageImg } from '../../store/store';

const ListLikedPhotos = (props: any) => {
	const list = props.listLiked.map((el: IStorageImg) => {
		return (
			<li key={el.id} className="liked-photos__item">
				<span className="liked-photos__author"> {el.author}</span>
				<span className="liked-photos__like">{el.like} likes</span>
				<img className="liked-photos__img" src={el.img} alt={el.title} />
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
