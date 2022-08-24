// * react
import React, { PropsWithChildren } from 'react';

// * styles
import styles from './HeroButton.module.scss';

const HeroButton: React.FC<PropsWithChildren> = ({ children }) => {
    return <button className={styles.btn}>{children}</button>;
};

export default HeroButton;
