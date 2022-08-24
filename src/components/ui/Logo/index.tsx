// * react
import { useLocation, useNavigate } from 'react-router-dom';

// * icons
import { RiShoppingCartFill } from 'react-icons/ri';

// * styles
import styles from './Logo.module.scss';

const Logo = () => {
    const { pathname } = useLocation();
    const navigate = useNavigate();

    const scrollToTop = () => {
        if (pathname === '/') {
            window.scrollTo({
                top: 0,
                behavior: 'smooth',
            });
        } else {
            navigate('/');
        }
    };
    return (
        <div onClick={scrollToTop} className={styles.logo}>
            <RiShoppingCartFill className={styles.icon} />
            <span className={styles.text}>Widespread</span>
        </div>
    );
};

export default Logo;
