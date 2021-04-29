import { makeObservable, observable, action } from 'mobx';
import galleryData from './dataImg';

export interface IStorageImg {
	img: string;
	id: number;
	title: string;
	author: string;
	like: number;
	liked: boolean;
}

export interface IFavotiteAuthor {
	author: string;
	likes: number;
	id: number;
}

class State {
	galleryList: IStorageImg[] = galleryData;
	favoriteImg: IFavotiteAuthor[] | [] = [];
	popupImg: IStorageImg | null = null;
	renderPopup: boolean = false;
	topImg: IStorageImg[] | [] = [];

	constructor() {
		makeObservable(this, {
			galleryList: observable,
			favoriteImg: observable,
			renderPopup: observable,
			popupImg: observable,
			topImg: observable,
			toggleLike: action,
			isFavorite: action,
			setPopupImg: action,
			closePopup: action,
			sortByLikes: action,
		});
	}

	toggleLike = (img: IStorageImg): IStorageImg[] => {
		if (img.liked) {
			img.like -= 1;
			img.liked = !img.liked;
			return this.galleryList;
		}
		if (!img.liked) {
			img.like += 1;
			img.liked = !img.liked;
		}
		return this.galleryList;
	};

	isFavorite = (user: IStorageImg): void => {
		const authorIndex: number = this.favoriteImg.findIndex((el) => el.author === user.author);
		const author: IFavotiteAuthor | undefined = this.favoriteImg.find(
			(el) => el.author === user.author,
		);

		if (user.author === author?.author) {
			if (user.liked) {
				author.likes += user.like;
			} else {
				if (author.likes - user.like - 1 <= 0) {
					this.favoriteImg.splice(authorIndex, 1);
				}
				if (author.likes - user.like >= 0) {
					author.likes -= user.like + 1;
				}
			}
		} else {
			let favotiteAuthor: IFavotiteAuthor = {
				author: user.author,
				likes: user.like,
				id: user.id,
			};
			this.favoriteImg = [...this.favoriteImg, favotiteAuthor];
		}

		this.favoriteImg.sort((a, b) => b.likes - a.likes);
	};

	setPopupImg = (img: IStorageImg): void => {
		this.renderPopup = true;
		this.popupImg = img;
	};

	closePopup = (): void => {
		this.renderPopup = false;
	};

	sortByLikes = (): void => {
		this.topImg = [...state.galleryList].sort((a, b) => b.like - a.like);
		this.topImg.length = 5;
	};
}

export const state = new State();
