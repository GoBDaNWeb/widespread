// * react
import React, { useEffect, useState } from 'react';
import { IMainProps } from './types';

// * services
import { getAllProducts, getPopularProducts } from '@services/productsApi';

// * styles
import styles from './Main.module.scss';

// * components
import Hero from './components/Hero';
import PopularProducts from './components/PopularProducts';
import SectionBanners from './components/SectionBanners';
import AllProducts from './components/AllProducts';

const Main: React.FC<IMainProps> = ({ allProducts, popularProducts }) => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className={styles.main}>
            <Hero />
            <PopularProducts products={popularProducts} />
            <SectionBanners />
            <AllProducts products={allProducts} />
        </div>
    );
};

export default Main;
