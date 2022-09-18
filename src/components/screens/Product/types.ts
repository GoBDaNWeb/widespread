import { IProductResponse, IProduct } from '@models/types';

export interface IProductProps {
    allProducts: IProductResponse[];
    similarProducts: IProductResponse[];
    product: IProduct;
}
