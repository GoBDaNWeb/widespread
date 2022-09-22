// * react/next
import { NextPage, GetStaticProps, GetStaticPaths } from 'next';
import { ICategoryPageProps } from '@models/types';

// * services
import {
    getAllProductsByCategory,
    getAllCategories,
} from '@services/productsApi';

// * components
import Category from '@components/screens/Category';

const CategoryPage: NextPage<ICategoryPageProps> = ({ products }) => {
    console.log(products);

    return <Category products={products} />;
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const products = await getAllProductsByCategory(params?.slug);
    console.log(products);

    return { props: { products } };
};

export const getStaticPaths: GetStaticPaths = async () => {
    const caterories = await getAllCategories();
    return {
        // @ts-ignore
        paths: caterories.map(({ slug }) => ({
            params: { slug: slug.toString() },
        })),
        fallback: false,
    };
};

export default CategoryPage;
