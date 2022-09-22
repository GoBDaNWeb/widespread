// * react/next
import React from 'react';
import { IPaginateByuttonProps } from './types';

// * icons
import { MdNavigateNext, MdNavigateBefore } from 'react-icons/md';

// * styles
import styles from './PaginateButton.module.scss';

const PaginateButton: React.FC<IPaginateByuttonProps> = ({
    onClick,
    isPrev,
    disabled,
}) => {
    return (
        <button className={styles.btn} onClick={onClick} disabled={disabled}>
            {isPrev ? <MdNavigateBefore /> : <MdNavigateNext />}
        </button>
    );
};

export default PaginateButton;
