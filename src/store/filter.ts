import { makeAutoObservable } from 'mobx';

class Filter {
    hasNextPage: boolean = true;

    hasPrevPage: boolean = false;

    nextCursor: string = '';

    prevCursor: string = '';

    searchValue: string = '';

    order: string = 'DESC';

    sort: string | null = null;

    select: string | null = null;

    constructor() {
        makeAutoObservable(this);
    }

    handleHasNextPage(bool: boolean) {
        this.hasNextPage = bool;
    }

    handleHasPrevPage(bool: boolean) {
        this.hasPrevPage = bool;
    }

    setNextCursor(cursor: string) {
        this.nextCursor = cursor;
    }

    setPrevCursor(cursor: string) {
        this.prevCursor = cursor;
    }

    setSearchValue(value: string) {
        this.searchValue = value;
    }

    setOrder(order: string) {
        this.order = order;
    }

    setSort(sort: string | null) {
        this.sort = sort;
    }

    setSelect(select: string | null) {
        this.select = select;
    }
}

export default new Filter();
