// * react
import React from 'react';
import { ISectionBannerProps } from '../../types';

// * styles
import styles from './SectionBanner.module.scss';

// * components
import Banner from '@components/common/Banner';

const SectionBanners: React.FC<ISectionBannerProps> = ({
    tShirtsCategory,
    hoodiesCategory,
    pantsCategory,
}) => {
    return (
        <div className={styles.banners}>
            <Banner banner={tShirtsCategory} />
            <div className={styles.sideBanners}>
                <Banner banner={hoodiesCategory} />
                <Banner banner={pantsCategory} />
            </div>
        </div>
    );
};

export default SectionBanners;
