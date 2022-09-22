import { IProductEdge } from '@models/types';

export interface IProductsListProps {
    products: IProductEdge[] | undefined | null;
    title?: string;
    isPaginate: boolean;
    isLoading: boolean;
    prevPage?: () => void;
    nextPage?: () => void;
}
