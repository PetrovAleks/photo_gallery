import React from 'react';
import { observer } from 'mobx-react';
import { IStorageImg } from '../../store/store';
import { state } from '../../store/store';

const ListLikedPhotos = observer(() => {
	const BILLET = <p className="liked-photos--billet"> Don't like anything</p>;

	const list = state.favoriteImg.map((el: IStorageImg) => {
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
			<h2 className="title">List Liked</h2>
			<div className="wrapper-liked-photos">
				{state.favoriteImg.length === 0 ? (
					BILLET
				) : (
					<ul className="liked-photos__list list-style">{list}</ul>
				)}
			</div>
		</section>
	);
});

export default ListLikedPhotos;
