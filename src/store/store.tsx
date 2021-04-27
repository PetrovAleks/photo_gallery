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

class State {
	galleryList: IStorageImg[] = galleryData;
	favoriteImg: IStorageImg[] | [] = [];
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

	isFavorite = (): IStorageImg[] => {
		const liked: IStorageImg[] = [];
		this.galleryList.forEach((el) => {
			if (el.liked) {
				liked.push(el);
			}
		});
		this.favoriteImg = liked.sort((a, b) => b.like - a.like);
		return this.favoriteImg;
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
