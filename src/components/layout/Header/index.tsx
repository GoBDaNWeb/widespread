// * store
import { observer } from 'mobx-react-lite';
import cart from '@store/cart';

// * styles
import styles from './Header.module.scss';

// * components
import Logo from '@components/ui/Logo';
import Burger from '@components/ui/Burger';
import Navigation from './components/Navigation';
import CartButton from '@components/ui/CartButton';

const Header = observer(() => {
    return (
        <div className={styles.header}>
            <Burger />
            <Logo />
            <Navigation />
            <CartButton fn={() => cart.handleOpenCart()} />
        </div>
    );
});

export default Header;
