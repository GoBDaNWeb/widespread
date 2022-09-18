// * react/next
import { GetStaticProps, NextPage } from 'next';
import { IMainPageProps } from '@models/types';

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
    const tShirtsCategory = await getBannerCategory(
        'cl76yu5u5dq6q0ctg7n366vnb',
    );
    const hoodiesCategory = await getBannerCategory(
        'cl76zh0fyedu80dui7hkwgjb4',
    );
    const pantsCategory = await getBannerCategory('cl76zi4vddxhs0buwvbd3pn7n');

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
