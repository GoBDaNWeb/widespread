// * react/next
import Link from 'next/link';

// * styles
import styles from './MainBanner.module.scss';

// * components

const MainBanner = () => {
    return (
        <Link href={`/section/${123}`}>
            <div className={styles.banner}>MainBanner</div>
        </Link>
    );
};

export default MainBanner;
