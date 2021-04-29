import React from 'react';
import { observer } from 'mobx-react';
import { IFavotiteAuthor } from '../../store/store';
import { state } from '../../store/store';

const ListLikedPhotos = observer(
	(): JSX.Element => {
		const BILLET: JSX.Element = <p className="liked-photos--billet"> Don't like anything</p>;

		const list = state.favoriteImg.map(
			(el: IFavotiteAuthor): JSX.Element => {
				return (
					<li key={el.id} className="liked-photos__item">
						<span className="liked-photos__author"> {el.author}</span>
						<span className="liked-photos__like">{el.likes} likes</span>
					</li>
				);
			},
		);
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
	},
);

export default ListLikedPhotos;
