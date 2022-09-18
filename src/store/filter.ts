import { makeAutoObservable } from 'mobx';

class Filter {
    currentPage: number = 1;

    constructor() {
        makeAutoObservable(this);
    }

    setCurrentPage(page: number) {
        this.currentPage = page;
    }
}

export default new Filter();
