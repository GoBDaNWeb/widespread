// react
import React from 'react';
import { IProductsListProps } from './types';

// * store
import { observer } from 'mobx-react-lite';
import filter from '@store/filter';

// * styles
import styles from './ProductsList.module.scss';

// * components
import ProductCard from '@components/common/ProductCard';
import Title from '@components/ui/Title';
import Skeleton from '@components/ui/Skeleton';
import PaginateButton from '@components/ui/PaginateButton';

const ProductsList: React.FC<IProductsListProps> = observer(
    ({ products, title, isPaginate, isLoading, prevPage, nextPage }) => {
        return (
            <div className={styles.products}>
                {title && <Title variant="h3">{title}</Title>}
                <div className={styles.list}>
                    {isLoading ? (
                        <>
                            {[...Array(12)].map((index: number) => (
                                <Skeleton key={index} />
                            ))}
                        </>
                    ) : (
                        <>
                            {products?.map((product) => (
                                <ProductCard
                                    product={product.node}
                                    key={product.node.id}
                                />
                            ))}
                        </>
                    )}
                </div>
                {isPaginate && (
                    <div className={styles.paginationBtns}>
                        <PaginateButton
                            disabled={!filter.hasPrevPage}
                            onClick={prevPage}
                            isPrev
                        />
                        <PaginateButton
                            disabled={!filter.hasNextPage}
                            onClick={nextPage}
                            isPrev={false}
                        />
                    </div>
                )}
            </div>
        );
    },
);

export default ProductsList;
