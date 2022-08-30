// * react/next
import React from 'react';
import { ICloseButtonProps } from './types';

// * icons
import { AiOutlineClose } from 'react-icons/ai';

// * styles
import styles from './CloseButton.module.scss';

const CloseButton: React.FC<ICloseButtonProps> = ({ fn }) => {
    return (
        <button onClick={fn} className={styles.btn}>
            <AiOutlineClose />
        </button>
    );
};

export default CloseButton;
