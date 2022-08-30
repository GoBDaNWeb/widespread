// * react
import React, { PropsWithChildren } from 'react';
import { IBackdropProps } from './types';

// * store
import { observer } from 'mobx-react-lite';
import cart from '@store/cart';

// * styles
import styles from './Backdrop.module.scss';

const Backdrop: React.FC<PropsWithChildren<IBackdropProps>> = observer(
    ({ children, fn }) => {
        return (
            <div
                onClick={fn}
                className={`${styles.backdrop} ${
                    !cart.isCartOpen && styles.hidden
                }`}
            >
                {children}
            </div>
        );
    },
);

export default Backdrop;
