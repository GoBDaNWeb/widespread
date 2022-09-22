// * react
import React, { useEffect } from 'react';
import { IMainPageProps } from './types';

// * store
import { observer } from 'mobx-react-lite';
import product from '@store/product';
import filter from '@store/filter';

// * hooks
import useDebounce from '@hooks/useDebounce';
import useFecthProducts from '@hooks/useFetchProducts';

// * styles
import styles from './Main.module.scss';

// * components
import Hero from './components/Hero';
import ProductsList from '@components/common/ProductsList';
import SectionBanners from './components/SectionBanners';
import Filters from '@components/common/Filterts';

const Main: React.FC<IMainPageProps> = observer(
    ({ tShirtsCategory, hoodiesCategory, pantsCategory }) => {
        const {
            data: allProducts,
            refetch,
            prevPage,
            nextPage,
            isLoading,
        } = useFecthProducts(
            filter.order,
            filter.sort,
            filter.searchValue,
            filter.select,
        );

        const debounce = useDebounce(filter.searchValue);

        useEffect(() => {
            refetch(
                filter.order,
                filter.sort,
                filter.searchValue,
                filter.select,
            );
        }, [filter.order, filter.sort, debounce, filter.select]);

        useEffect(() => {
            if (allProducts) {
                filter.handleHasNextPage(allProducts.pageInfo.hasNextPage);
                filter.handleHasPrevPage(allProducts.pageInfo.hasPreviousPage);
                filter.setNextCursor(allProducts.pageInfo.endCursor);
                filter.setPrevCursor(allProducts.pageInfo.startCursor);
            }
        }, [allProducts]);

        useEffect(() => {
            window.scrollTo(0, 0);
        }, []);

        return (
            <div className={styles.main}>
                <Hero />
                <ProductsList
                    products={product.popularProducts?.edges}
                    title="Популярные Товары"
                    isLoading={false}
                    isPaginate={false}
                />
                <SectionBanners
                    tShirtsCategory={tShirtsCategory}
                    hoodiesCategory={hoodiesCategory}
                    pantsCategory={pantsCategory}
                />
                <Filters title="Все Товары" />
                <ProductsList
                    products={allProducts?.edges}
                    isLoading={isLoading}
                    isPaginate
                    prevPage={() => prevPage(filter.prevCursor)}
                    nextPage={() => nextPage(filter.nextCursor)}
                />
            </div>
        );
    },
);

export default Main;
