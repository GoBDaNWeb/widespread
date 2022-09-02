// * react/next
import { NextPage, GetStaticProps } from 'next';
import { ICategoryPageProps } from '@modules/types';

// * services
import {
    getAllProductsByCategory,
    getAllCategories,
} from '@services/productsApi';

// * components
import Category from '@components/screens/Category';

const CategoryPage: NextPage<ICategoryPageProps> = ({ products }) => {
    return <Category products={products} />;
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const products = await getAllProductsByCategory(params?.slug);
    return { props: { products } };
};

export const getStaticPaths = async () => {
    const categories = await getAllCategories();

    return {
        // @ts-ignore
        paths: categories.map(({ slug }) => ({ params: { slug } })),
        fallback: true,
    };
};

export default CategoryPage;
