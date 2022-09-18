// * react/next
import { GetStaticProps, NextPage } from 'next';
import { IMainPageProps } from '@models/types';

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

const MainPage: NextPage<IMainPageProps> = ({
    allProducts,
    popularProducts,
    tShirtsCategory,
    hoodiesCategory,
    pantsCategory,
}) => {
    return (
        <Main
            allProducts={allProducts}
            popularProducts={popularProducts}
            tShirtsCategory={tShirtsCategory}
            hoodiesCategory={hoodiesCategory}
            pantsCategory={pantsCategory}
        />
    );
};

export const getStaticProps: GetStaticProps = async () => {
    const allProducts = (await getAllProducts()) || [];
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
