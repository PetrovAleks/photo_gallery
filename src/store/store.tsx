import { makeObservable, observable, action } from 'mobx';

export interface IStorageImg {
	img: string;
	id: number;
	title: string;
	author: string;
	like: number;
	liked: boolean;
}

const galleryData: Array<IStorageImg> = [
	{
		img: 'https://cdn.pixabay.com/photo/2020/12/07/02/26/buildings-5810399__340.jpg',
		title: 'https://cdn.pixabay.com/photo/2020/12/07/02/26/buildings-5810399__340.jpg',
		author: 'author',
		like: 1,
		id: 1,
		liked: false,
	},
	{
		img: 'https://cdn.pixabay.com/photo/2020/12/07/02/26/buildings-5810399__340.jpg',
		title: 'https://cdn.pixabay.com/photo/2020/12/07/02/26/buildings-5810399__340.jpg',
		author: 'author',
		like: 1,
		id: 2,
		liked: false,
	},
	{
		img: 'https://cdn.pixabay.com/photo/2020/12/07/02/26/buildings-5810399__340.jpg',
		title: 'https://cdn.pixabay.com/photo/2020/12/07/02/26/buildings-5810399__340.jpg',
		author: 'author',
		like: 1,
		id: 3,
		liked: false,
	},
	{
		img: 'https://cdn.pixabay.com/photo/2020/12/07/02/26/buildings-5810399__340.jpg',
		title: 'https://cdn.pixabay.com/photo/2020/12/07/02/26/buildings-5810399__340.jpg',
		author: 'author',
		like: 1,
		id: 26,
		liked: false,
	},
	{
		img: 'https://cdn.pixabay.com/photo/2020/12/07/02/26/buildings-5810399__340.jpg',
		title: 'https://cdn.pixabay.com/photo/2020/12/07/02/26/buildings-5810399__340.jpg',
		author: 'author',
		like: 1,
		id: 4,
		liked: false,
	},
	{
		img: 'https://cdn.pixabay.com/photo/2020/12/07/02/26/buildings-5810399__340.jpg',
		title: 'https://cdn.pixabay.com/photo/2020/12/07/02/26/buildings-5810399__340.jpg',
		author: 'author',
		like: 1,
		id: 5,
		liked: false,
	},
];

class State {
	galleryList = galleryData;
	likedImg: Array<IStorageImg> | [] = [];
	selectedImgId = null;

	constructor() {
		makeObservable(this, {
			galleryList: observable,
			likedImg: observable,
			toggleLike: action,
			addLikedImg: action,
		});
	}

	toggleLike(img: IStorageImg): void {
		if (img.liked) {
			img.like -= 1;
			img.liked = !img.liked;
			return;
		}
		if (!img.liked) {
			img.like += 1;
			img.liked = !img.liked;
		}
	}

	addLikedImg(): void {
		this.galleryList.forEach((el: IStorageImg) => {
			if (el.liked) {
				this.likedImg.push();
			}
		});
	}
}

export const state = new State();
