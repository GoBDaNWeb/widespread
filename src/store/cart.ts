import { makeAutoObservable } from 'mobx';

class Cart {
    cartProducts: any = [];

    isCartOpen = false;

    constructor() {
        makeAutoObservable(this);
    }

    addProduct(product: any) {
        // @ts-ignore
        this.cartProducts.push({ ...product, quantity: 1, disabled: false });
    }

    removeProduct(id: string) {
        this.cartProducts = this.cartProducts.filter(
            (product: any) => product.id !== id,
        );
    }

    handleOpenCart() {
        this.isCartOpen = !this.isCartOpen;
    }

    totalPrice() {
        const filtered = this.notDisabledProducts();
        return filtered.reduce((prev: number, product: any) => {
            return prev + product.price * product.quantity;
        }, 0);
    }

    increaseQuantity(id: string) {
        const currentIndex = this.cartProducts.findIndex(
            (product: any) => product.id === id,
        );
        // eslint-disable-next-line no-plusplus
        this.cartProducts[currentIndex].quantity++;
    }

    deccreaseQuantity(id: string) {
        const currentIndex = this.cartProducts.findIndex(
            (product: any) => product.id === id,
        );
        if (this.cartProducts[currentIndex].quantity === 1) {
            this.cartProducts[currentIndex].disabled = true;
            return;
        }
        // eslint-disable-next-line no-plusplus
        this.cartProducts[currentIndex].quantity--;
    }

    disableProduct(id: string) {
        const currentIndex = this.cartProducts.findIndex(
            (product: any) => product.id === id,
        );
        // eslint-disable-next-line no-plusplus
        this.cartProducts[currentIndex].disabled = true;
    }

    returnProduct(id: string) {
        const currentIndex = this.cartProducts.findIndex(
            (product: any) => product.id === id,
        );
        // eslint-disable-next-line no-plusplus
        this.cartProducts[currentIndex].disabled = false;
    }

    removeProducts() {
        this.cartProducts = this.cartProducts.filter(
            (product: any) => product.disabled === false,
        );
    }

    notDisabledProducts() {
        return this.cartProducts.filter(
            (product: any) => product.disabled === false,
        );
    }

    isInCart(product: any) {
        const filtered = this.cartProducts.filter(
            (cartProduct: any) => cartProduct.id === product.id,
        );

        if (filtered.length) {
            return true;
        }

        return false;
    }
}

export default new Cart();
