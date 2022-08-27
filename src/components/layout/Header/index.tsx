// * react

// * store
import { observer } from 'mobx-react-lite';
// import cart from 'store/cart';

// * styles
import styles from './Header.module.scss';

// * components
import Logo from '@components/ui/Logo';
import Navigation from './Navigation';
import CartButton from '@components/ui/CartButton';

const Header = observer(() => {
    return (
        <div className={styles.header}>
            <Logo />
            <Navigation />
            <CartButton />
        </div>
    );
});

export default Header;
