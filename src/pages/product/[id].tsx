// * react/next
import React from 'react';
import { GetStaticProps, NextPage } from 'next';
import { IProductPageProps } from '@modules/types';

// * services
import {
    getProduct,
    getAllProducts,
    getFilteredProductsByCategory,
} from '@services/productsApi';

// * components
import Product from '@components/screens/Product';

const ProductPage: React.FC<IProductPageProps> = ({
    product,
    similarProducts,
    allProducts,
}) => {
    return (
        <Product
            product={product}
            similarProducts={similarProducts}
            allProducts={allProducts}
        />
    );
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const product = await getProduct(params?.id);
    const similarProducts = await getFilteredProductsByCategory(
        product.categories[0].name,
        params?.id,
    );
    const allProducts = await getAllProducts();

    return {
        props: { product, similarProducts, allProducts },
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
