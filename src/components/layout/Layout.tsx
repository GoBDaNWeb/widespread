// * react
import React, { PropsWithChildren } from 'react';

// * styles
import styles from './Layout.module.scss';

// * components
import Header from './Header';

const Layout: React.FC<PropsWithChildren> = ({ children }) => {
    return (
        <>
            <Header />
            <div className={styles.layout}>{children}</div>
        </>
    );
};

export default Layout;
