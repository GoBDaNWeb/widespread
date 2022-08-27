// * react
import React, { PropsWithChildren } from 'react';

// * styles
import styles from './Layout.module.scss';

// * components
import Header from './Header';
import Backdrop from './Backdrop';
import Cart from './Cart';

const Layout: React.FC<PropsWithChildren> = ({ children }) => {
    return (
        <>
            <Backdrop>
                <Cart />
            </Backdrop>
            <Header />
            <div className={styles.layout}>{children}</div>
        </>
    );
};

export default Layout;
