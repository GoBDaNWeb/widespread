// * react/next
import React from 'react';
import { ICartButtonProps } from './types';

// * icons
import { RiShoppingCart2Line } from 'react-icons/ri';

// * styles
import styles from './CartButtom.module.scss';

const CartButton: React.FC<ICartButtonProps> = ({ fn }) => {
    return (
        <button onClick={fn} className={styles.iconCart}>
            <RiShoppingCart2Line />
        </button>
    );
};

export default CartButton;
