// * react
import { useEffect } from 'react';

// * styles
import styles from './Main.module.scss';

// * components
import Hero from './components/Hero';
import PopularProducts from './components/PopularProducts';
import SectionBanners from './components/SectionBanners';
import AllProducts from './components/AllProducts';

const Main = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className={styles.main}>
            <Hero />
            <PopularProducts />
            <SectionBanners />
            <AllProducts />
        </div>
    );
};

export default Main;
