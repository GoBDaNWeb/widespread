// * react/next
import { useEffect } from 'react';
import { GetStaticProps, NextPage } from 'next';
import { IMainPageProps } from '@models/types';

// * store
import { observer } from 'mobx-react-lite';
import product from '@store/product';
import filter from '@store/filter';

// * constants
import {
    tShirtCategoryId,
    hoodiesCategoryId,
    pantsCategoryId,
} from '../constants';

// * services
import {
    getAllProducts,
    getPopularProducts,
    getBannerCategory,
} from '@services/productsApi';

// * component
import Main from '@components/screens/Main';

const MainPage: NextPage<IMainPageProps> = observer(
    ({
        allProducts,
        popularProducts,
        tShirtsCategory,
        hoodiesCategory,
        pantsCategory,
    }) => {
        useEffect(() => {
            product.setAllProducts(allProducts);
            product.setPopularProductsProducts(popularProducts);
            filter.handleHasNextPage(allProducts.pageInfo.hasNextPage);
            filter.handleHasPrevPage(allProducts.pageInfo.hasPreviousPage);
            filter.setNextCursor(allProducts.pageInfo.endCursor);
            filter.setPrevCursor(allProducts.pageInfo.startCursor);
        }, []);

        return (
            <Main
                tShirtsCategory={tShirtsCategory}
                hoodiesCategory={hoodiesCategory}
                pantsCategory={pantsCategory}
            />
        );
    },
);

export const getStaticProps: GetStaticProps = async () => {
    const allProducts =
        (await getAllProducts(
            filter.order,
            filter.sort,
            filter.searchValue,
            filter.select,
        )) || [];
    const popularProducts = await getPopularProducts();
    const tShirtsCategory = await getBannerCategory(tShirtCategoryId);
    const hoodiesCategory = await getBannerCategory(hoodiesCategoryId);
    const pantsCategory = await getBannerCategory(pantsCategoryId);

    return {
        props: {
            allProducts,
            popularProducts,
            tShirtsCategory,
            hoodiesCategory,
            pantsCategory,
        },
    };
};

export default MainPage;
