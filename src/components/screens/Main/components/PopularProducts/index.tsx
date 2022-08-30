// react
import React from 'react';
import { IProductsProps } from '../../types';

// * styles
import styles from './PopularProducts.module.scss';

// * components
import ProductCard from '@components/common/ProductCard';

const PopularProducts: React.FC<IProductsProps> = ({ products }) => {
    return (
        <div className={styles.products}>
            <h2 className={styles.title}>Популярные Товары</h2>
            <div className={styles.List}>
                {products.map((product) => (
                    <ProductCard product={product.node} key={product.node.id} />
                ))}
            </div>
        </div>
    );
};

export default PopularProducts;
