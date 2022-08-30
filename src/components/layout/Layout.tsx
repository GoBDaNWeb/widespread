// * react
import React, { PropsWithChildren } from 'react';

// * store
import { observer } from 'mobx-react-lite';
import cart from '@store/cart';

// * styles
import styles from './Layout.module.scss';

// * components
import Header from './Header';
import Backdrop from './Backdrop';
import Cart from './Cart';

const Layout: React.FC<PropsWithChildren> = observer(({ children }) => {
    return (
        <>
            <Backdrop fn={() => cart.handleOpenCart()}>
                <Cart />
            </Backdrop>
            <Header />
            <div className={styles.layout}>{children}</div>
        </>
    );
});

export default Layout;
