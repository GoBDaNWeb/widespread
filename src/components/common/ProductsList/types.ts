import { IProductResponse } from '@modules/types';

export interface IProductsListProps {
    products: IProductResponse[];
    title?: string;
}
