// * react
import { Link } from 'react-router-dom';

// * styles
import styles from './SideBanner.module.scss';

// * components

const SideBanner = () => {
    return (
        <Link to={`/section/${123}`}>
            <div className={styles.banner}>SideBanner</div>
        </Link>
    );
};

export default SideBanner;
