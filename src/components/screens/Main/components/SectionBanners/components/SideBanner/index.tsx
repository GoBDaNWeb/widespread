// * react/next
import Link from 'next/link';

// * styles
import styles from './SideBanner.module.scss';

// * components

const SideBanner = () => {
    return (
        <Link href={`/section/${123}`}>
            <div className={styles.banner}>SideBanner</div>
        </Link>
    );
};

export default SideBanner;
