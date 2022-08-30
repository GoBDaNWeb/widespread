// * react
import { useRouter } from 'next/router';

// * icons
import { RiShoppingCartFill } from 'react-icons/ri';

// * styles
import styles from './Logo.module.scss';

const Logo = () => {
    const router = useRouter();

    const scrollToTop = () => {
        if (router.pathname === '/') {
            window.scrollTo({
                top: 0,
                behavior: 'smooth',
            });
        } else {
            router.push('/');
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
