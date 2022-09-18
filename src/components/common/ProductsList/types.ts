import { IProductResponse } from '@models/types';

export interface IProductsListProps {
    products: IProductResponse[];
    title?: string;
}
