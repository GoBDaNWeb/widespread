import { makeAutoObservable } from 'mobx';

class Modal {
    isModalOpen = false;

    constructor() {
        makeAutoObservable(this);
    }

    handleOpenCart() {
        this.isModalOpen = !this.isModalOpen;
    }
}

export default new Modal();
