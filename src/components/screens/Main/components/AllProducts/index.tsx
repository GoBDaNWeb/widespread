// react
import React from 'react';
import { IProductsProps } from '../../types';

// * styles
import styles from './AllProducts.module.scss';

// * components
import ProductCard from '@components/common/ProductCard';

const AllProducts: React.FC<IProductsProps> = ({ products }) => {
    return (
        <div className={styles.products}>
            <div className={styles.List}>
                {products.map((product) => (
                    <ProductCard product={product.node} key={product.node.id} />
                ))}
            </div>
        </div>
    );
};

export default AllProducts;
