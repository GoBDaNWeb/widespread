// * styles
import styles from './SectionBanner.module.scss';

// * components
import MainBanner from './components/MainBanner';
import SideBanner from './components/SideBanner';

const SectionBanners = () => {
    return (
        <div className={styles.banners}>
            <MainBanner />
            <div className={styles.sideBanners}>
                <SideBanner />
                <SideBanner />
            </div>
        </div>
    );
};

export default SectionBanners;
