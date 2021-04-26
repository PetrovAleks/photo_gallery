import { makeObservable, observable, action } from 'mobx';

export interface IStorageImg {
	img: string;
	id: number;
	title: string;
	author: string;
	like: number;
	liked: boolean;
}

const galleryData: IStorageImg[] = [
	{
		img: 'https://cdn.pixabay.com/photo/2020/12/07/02/26/buildings-5810399__340.jpg',
		title: 'Title',
		author: 'author',
		like: 1,
		id: 1,
		liked: false,
	},
	{
		img: 'https://cdn.pixabay.com/photo/2020/12/07/02/26/buildings-5810399__340.jpg',
		title: 'Title',
		author: 'author',
		like: 3,
		id: 2,
		liked: false,
	},
	{
		img: 'https://cdn.pixabay.com/photo/2020/12/07/02/26/buildings-5810399__340.jpg',
		title: 'Title',
		author: 'author',
		like: 6,
		id: 3,
		liked: false,
	},
	{
		img: 'https://cdn.pixabay.com/photo/2020/12/07/02/26/buildings-5810399__340.jpg',
		title: 'Title',
		author: 'author',
		like: 9,
		id: 26,
		liked: false,
	},
	{
		img: 'https://cdn.pixabay.com/photo/2020/12/07/02/26/buildings-5810399__340.jpg',
		title: 'Title',
		author: 'author',
		like: 22,
		id: 4,
		liked: false,
	},
	{
		img: 'https://cdn.pixabay.com/photo/2020/12/07/02/26/buildings-5810399__340.jpg',
		title: 'Title',
		author: 'author',
		like: 1,
		id: 5,
		liked: false,
	},
];

class State {
	galleryList: IStorageImg[] = galleryData;
	favoriteImg: IStorageImg[] | [] = [];
	popupImg: IStorageImg | null = null;
	renderPopup: boolean = false;

	constructor() {
		makeObservable(this, {
			galleryList: observable,
			favoriteImg: observable,
			renderPopup: observable,
			popupImg: observable,
			toggleLike: action,
			isFavorite: action,
			setPopupImg: action,
			closePopup: action,
		});
	}

	toggleLike = (img: IStorageImg): void => {
		if (img.liked) {
			img.like -= 1;
			img.liked = !img.liked;
			return;
		}
		if (!img.liked) {
			img.like += 1;
			img.liked = !img.liked;
			return;
		}
	};

	isFavorite = (): IStorageImg[] => {
		const liked = this.galleryList.filter((el) => el.liked);
		return (this.favoriteImg = [...liked]);
	};

	setPopupImg = (img: IStorageImg) => {
		this.renderPopup = true;
		this.popupImg = img;
	};
	closePopup = (): void => {
		this.renderPopup = false;
	};
}

export const state = new State();
