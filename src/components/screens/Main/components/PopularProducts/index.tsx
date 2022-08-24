// * styles
import styles from './PopularProducts.module.scss';

// * components
import ProductCard from '@components/common/ProductCard';

const PopularProducts = () => {
    return (
        <div className={styles.products}>
            <h2 className={styles.title}>Популярные Товары</h2>
            <div className={styles.List}>
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

export default PopularProducts;
