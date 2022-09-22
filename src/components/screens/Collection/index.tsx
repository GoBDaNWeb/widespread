// * react
import React from 'react';
import { ICollectionProps } from './types';

// helpers
import convertCollectionNames from '../../../helpers/conbertCollectionNames';

// * styles
import styles from './Collection.module.scss';

// * components
import ProductsList from '@components/common/ProductsList';

const Collection: React.FC<ICollectionProps> = ({ products }) => {
    const title = convertCollectionNames(
        products?.edges[0].node.collection.name,
    );

    return (
        <div className={styles.collection}>
            <ProductsList
                products={products.edges}
                title={title}
                isLoading={false}
                isPaginate={false}
            />
        </div>
    );
};

export default Collection;
