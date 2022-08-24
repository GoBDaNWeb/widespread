// * styles
import styles from './AllProducts.module.scss';

// * components
import ProductCard from '@components/common/ProductCard';

const AllProducts = () => {
    return (
        <div className={styles.products}>
            <div className={styles.List}>
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
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

export default AllProducts;
