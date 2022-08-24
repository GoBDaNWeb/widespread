// * react
import { Link } from 'react-router-dom';

// * styles
import styles from './MainBanner.module.scss';

// * components

const MainBanner = () => {
    return (
        <Link to={`/section/${123}`}>
            <div className={styles.banner}>MainBanner</div>
        </Link>
    );
};

export default MainBanner;
