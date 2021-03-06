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

export interface IProps {
	arrImg: IStorageImg[] | [];
	state: State;
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
			addFavoriteImg: action,
			setPopupImg: action,
			closePopup: action,
			sortByLikes: action,
			setRandomSliderImg: action,
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

	addFavoriteImg = (user: IStorageImg): void => {
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

	setRandomSliderImg = (gallery: IStorageImg[]): JSX.Element[] => {
		const sliderJSXElment: JSX.Element[] = [];
		const randomNumbers = [];

		for (let i = 0; i < gallery.length; i++) {
			const randomImg = Math.floor(Math.random() * gallery.length);
			randomNumbers.push(randomImg);
		}
		const uniqueRandomNumbers = [...new Set(randomNumbers)];

		for (let i = 0; i < uniqueRandomNumbers.length; i++) {
			const elSlider = (
				<div className="slider-item" key={gallery[uniqueRandomNumbers[i]].id}>
					<img
						src={gallery[uniqueRandomNumbers[i]].img}
						alt={gallery[uniqueRandomNumbers[i]].title}
						width="100%"
					/>
				</div>
			);
			sliderJSXElment.push(elSlider);
		}
		return sliderJSXElment;
	};
}

export const state = new State();
