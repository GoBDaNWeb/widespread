// * react/next
import React from 'react';
import { ICategoryProps } from './types';

// helpers
import convertCategoryNames from '../../../helpers/convertCategoryNames';

// * styles
import styles from './Category.module.scss';

// * components
import ProductsList from '@components/common/ProductsList';

const Category: React.FC<ICategoryProps> = ({ products }) => {
    const title = convertCategoryNames(products[0].node.categories[0].name);

    return (
        <div className={styles.category}>
            <ProductsList products={products} title={title} isPaginate />
        </div>
    );
};

export default Category;
