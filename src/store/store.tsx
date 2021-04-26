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
	galleryList: IStorageImg[] = galleryData;

	constructor() {
		makeObservable(this, {
			galleryList: observable,
			toggleLike: action,
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
		}
	};
}

export const state = new State();
