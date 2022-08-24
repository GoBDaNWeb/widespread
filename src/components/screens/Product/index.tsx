// * react
import { useEffect } from 'react';

// * styles
import styles from './Product.module.scss';

// * components
import ProductCard from '@components/common/ProductCard';

const Product = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className={styles.product}>
            <div className={styles.mainInfo}>
                <div className={styles.productImage}>image</div>
                <div className={styles.info}>info</div>
            </div>
            <div className={styles.reviews}>reviews</div>
            <div className={styles.otherProducts}>
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
            </div>
        </div>
    );
};

export default Product;
