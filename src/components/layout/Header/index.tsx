// * react
import { Link } from 'react-router-dom';

// * icons
import { RiShoppingCart2Line } from 'react-icons/ri';

// * styles
import styles from './Header.module.scss';

// * components
import Logo from '@components/ui/Logo';
import Navigation from './Navigation';

const Header = () => {
    return (
        <div className={styles.header}>
            <Logo />
            <Navigation />
            <Link to="/cart">
                <RiShoppingCart2Line className={styles.iconCart} />
            </Link>
        </div>
    );
};

export default Header;
