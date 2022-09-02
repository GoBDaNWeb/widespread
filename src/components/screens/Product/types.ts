import { IProductResponse, IProduct } from '@modules/types';

export interface IProductProps {
    allProducts: IProductResponse[];
    similarProducts: IProductResponse[];
    product: IProduct;
}
