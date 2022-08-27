// * react
import React, { PropsWithChildren } from 'react';

// * store
import { observer } from 'mobx-react-lite';
import cart from 'store/cart';

// * styles
import styles from './Backdrop.module.scss';

const Backdrop: React.FC<PropsWithChildren> = observer(({ children }) => {
    return (
        <div
            onClick={() => cart.handleOpenCart()}
            className={`${styles.backdrop} ${
                !cart.isCartOpen && styles.hidden
            }`}
        >
            {children}
        </div>
    );
});

export default Backdrop;
