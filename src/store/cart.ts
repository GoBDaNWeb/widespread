import { makeAutoObservable } from 'mobx';
import { ICartProduct, IProduct } from '@models/types';

class Cart {
    cartProducts: ICartProduct[] = [];

    isCartOpen: boolean = false;

    constructor() {
        makeAutoObservable(this);
    }

    addProduct(product: IProduct) {
        // @ts-ignore
        this.cartProducts.push({ ...product, quantity: 1, disabled: false });
    }

    removeProduct(id: string) {
        this.cartProducts = this.cartProducts.filter(
            (product: ICartProduct) => product.id !== id,
        );
    }

    handleOpenCart() {
        this.isCartOpen = !this.isCartOpen;
    }

    totalPrice() {
        const filtered = this.notDisabledProducts();
        return filtered?.reduce((prev: number, product: ICartProduct) => {
            return prev + product.price * product.quantity;
        }, 0);
    }

    increaseQuantity(id: string) {
        const currentIndex = this.cartProducts.findIndex(
            (product: ICartProduct) => product.id === id,
        );
        // eslint-disable-next-line no-plusplus
        this.cartProducts[currentIndex].quantity++;
    }

    deccreaseQuantity(id: string) {
        const currentIndex = this.cartProducts.findIndex(
            (product: ICartProduct) => product.id === id,
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
            (product: ICartProduct) => product.id === id,
        );
        this.cartProducts[currentIndex].disabled = true;
    }

    returnProduct(id: string) {
        const currentIndex = this.cartProducts.findIndex(
            (product: ICartProduct) => product.id === id,
        );
        this.cartProducts[currentIndex].disabled = false;
    }

    removeProducts() {
        this.cartProducts = this.cartProducts.filter(
            (product: ICartProduct) => product.disabled === false,
        );
    }

    notDisabledProducts() {
        return this.cartProducts.filter(
            (product: ICartProduct) => product.disabled === false,
        );
    }

    isInCart(product?: IProduct) {
        const filtered = this.cartProducts.filter(
            (cartProduct: ICartProduct) => cartProduct.id === product?.id,
        );

        if (filtered.length) {
            return true;
        }

        return false;
    }
}

export default new Cart();
