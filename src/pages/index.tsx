// * react/next
import { GetStaticProps, NextPage } from 'next';

// * services
import { getAllProducts, getPopularProducts } from '@services/productsApi';

// * component
import Main from '@components/screens/Main';

const MainPage: NextPage<any> = ({ allProducts, popularProducts }) => {
    return <Main allProducts={allProducts} popularProducts={popularProducts} />;
};

export const getStaticProps: GetStaticProps = async () => {
    const allProducts = (await getAllProducts()) || [];
    const popularProducts = await getPopularProducts();

    return { props: { allProducts, popularProducts } };
};

export default MainPage;
