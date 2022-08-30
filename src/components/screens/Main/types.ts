import { IProductResponse } from '@modules/types';

export interface IProductsProps {
    products: IProductResponse[];
}

export interface IMainProps {
    allProducts: any;
    popularProducts: any;
}
