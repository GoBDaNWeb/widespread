// * react/next
import React from 'react';
import { ICartButtonProps } from './types';

// * store
import { observer } from 'mobx-react-lite';
import cart from '@store/cart';

// * icons
import { RiShoppingCart2Line } from 'react-icons/ri';

// * styles
import styles from './CartButtom.module.scss';

const CartButton: React.FC<ICartButtonProps> = observer(({ fn }) => {
    return (
        <button onClick={fn} className={styles.iconCart}>
            <RiShoppingCart2Line />
            {cart.cartProducts.length > 0 && (
                <span>{cart.cartProducts.length}</span>
            )}
        </button>
    );
});

export default CartButton;
