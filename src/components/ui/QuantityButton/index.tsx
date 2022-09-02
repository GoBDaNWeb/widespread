// * react/next
import React, { PropsWithChildren } from 'react';
import { IQuantityButtonProps } from './types';

// * styles
import styles from './QuantityButton.module.scss';

const QuantityButton: React.FC<PropsWithChildren<IQuantityButtonProps>> = ({
    children,
    fn,
}) => {
    return (
        <button onClick={fn} className={styles.btn}>
            {children}
        </button>
    );
};

export default QuantityButton;
