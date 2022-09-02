// * react
import React, { useEffect } from 'react';
import { IMainPageProps } from '@modules/types';

// * styles
import styles from './Main.module.scss';

// * components
import Hero from './components/Hero';
import ProductsList from '@components/common/ProductsList';
import SectionBanners from './components/SectionBanners';

const Main: React.FC<IMainPageProps> = ({
    allProducts,
    popularProducts,
    tShirtsCategory,
    hoodiesCategory,
    pantsCategory,
}) => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className={styles.main}>
            <Hero />
            <ProductsList
                products={popularProducts}
                title="Популярные Товары"
            />
            <SectionBanners
                tShirtsCategory={tShirtsCategory}
                hoodiesCategory={hoodiesCategory}
                pantsCategory={pantsCategory}
            />
            <ProductsList products={allProducts} />
        </div>
    );
};

export default Main;
