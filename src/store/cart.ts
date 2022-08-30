import { makeAutoObservable } from 'mobx';

class Cart {
    cartProducts = [];

    isCartOpen = false;

    constructor() {
        makeAutoObservable(this);
    }

    addProduct(product: any) {
        // @ts-ignore
        this.cartProducts.push(product);
    }

    handleOpenCart() {
        this.isCartOpen = !this.isCartOpen;
    }
}

export default new Cart();
