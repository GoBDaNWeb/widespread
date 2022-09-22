import { IProductEdge, IProductResponse } from '@models/types';
import { makeAutoObservable } from 'mobx';

class Product {
    allProducts: IProductResponse | null = null;

    popularProducts: IProductResponse | null = null;

    similarProducts: IProductEdge[] = [];

    constructor() {
        makeAutoObservable(this);
    }

    setAllProducts(products: IProductResponse) {
        this.allProducts = products;
    }

    setPopularProductsProducts(products: IProductResponse) {
        this.popularProducts = products;
    }

    setSimilarProducts(products: IProductEdge[]) {
        this.similarProducts = products;
    }
}

export default new Product();
