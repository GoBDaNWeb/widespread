// * react/next
import React from 'react';
import Link from 'next/link';
import { IBannerProps } from './types';

// * styles
import styles from './Banner.module.scss';

// * components

const Banner: React.FC<IBannerProps> = ({ banner }) => {
    const bg = {
        backgroundImage: `url(${banner?.banner.url})`,
    };
    return (
        <Link href={`/category/${banner?.slug}`}>
            <div className={styles.banner} style={bg} />
        </Link>
    );
};

export default Banner;
