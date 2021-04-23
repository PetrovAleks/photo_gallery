import { makeObservable, observable, action, computed } from 'mobx';

interface IStorageImg {
	id: string;
	title: string;
	author: string;
	like: number;
}

class State {
	likedImg = [];
	selectedImgId = null;

	constructor(likedImg: []) {
		makeObservable(this, {
			selectedImgId: observable,
			likedImg: observable,
			toggleLike: action,
			selectedImg: computed,
		});
		this.likedImg = likedImg;
	}

	isLiked(img: []): any {
		return this.likedImg.findIndex((i) => i.id === img.id) > -1;
	}

	toggleLike(img: []): void {
		const index = this.likedImg.findIndex((i) => i.id === img.id);
		if (index > -1) {
			this.likedImg.splice(index, 1);
			this.likedImg = [...this.likedImg];
		} else {
			this.likedImg = [...this.likedImg, img];
		}
	}

	get selectedImg(): number | null {
		const img = this.likedImg.find((i) => i.id === this.selectedImgId);
		return img ? img : null;
	}
}

export const state = new State([]);
