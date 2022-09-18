import { IProduct } from '@models/types';

interface ICartProduct extends IProduct {
    disabled: boolean;
    quantity: number;
}

export interface ICartProductProps {
    product: ICartProduct;
}
