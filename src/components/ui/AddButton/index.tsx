// * react
import React from 'react';
import { IAddButtonProps } from './types';

// * store
import { observer } from 'mobx-react-lite';

// * icons
import { RiShoppingCart2Line } from 'react-icons/ri';
import { GrFormAdd } from 'react-icons/gr';

// * styles
import styles from './AddButton.module.scss';

const AddButton: React.FC<IAddButtonProps> = observer(({ fn, isInCart }) => {
    const handleClickButton = (
        e: React.MouseEvent<HTMLButtonElement>,
    ): void => {
        e.preventDefault();
        fn();
    };

    return (
        <button onClick={handleClickButton} className={styles.btn}>
            <span
                className={`${isInCart() ? styles.closeIcon : styles.addIcon}`}
            >
                <GrFormAdd />
            </span>
            {!isInCart() ? (
                <RiShoppingCart2Line className={styles.cartIcon} />
            ) : null}
        </button>
    );
});

export default AddButton;
