// * react/next
import React from 'react';
import { GetStaticProps, NextPage } from 'next';

// * services
import { getProduct, getAllProducts } from '@services/productsApi';

// * components
import Product from '@components/screens/Product';

const ProductPage: React.FC<any> = ({ product }) => {
    return <Product product={product} />;
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const product = await getProduct(params?.id);

    return {
        props: { product },
    };
};

export const getStaticPaths = async () => {
    const products = await getAllProducts();

    return {
        // @ts-ignore
        paths: products.map(({ node: { id } }) => ({ params: { id } })),
        fallback: true,
    };
};

export default ProductPage;
