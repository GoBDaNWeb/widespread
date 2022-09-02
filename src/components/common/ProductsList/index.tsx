// react
import React from 'react';
import { IProductsListProps } from './types';

// * styles
import styles from './ProductsList.module.scss';

// * components
import ProductCard from '@components/common/ProductCard';
import Title from '@components/ui/Title';

const ProductsList: React.FC<IProductsListProps> = ({ products, title }) => {
    return (
        <div className={styles.products}>
            {title && <Title variant="h3">{title}</Title>}
            <div className={styles.list}>
                {products?.map((product) => (
                    <ProductCard product={product.node} key={product.node.id} />
                ))}
            </div>
        </div>
    );
};

export default ProductsList;
