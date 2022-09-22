// * react/next
import React, { useEffect } from 'react';
import { GetStaticProps } from 'next';
import { IProductPageProps } from '@models/types';

// * store
import { observer } from 'mobx-react-lite';
import product from '@store/product';
import filter from '@store/filter';

// * services
import {
    getProduct,
    getAllProducts,
    getFilteredProductsByCategory,
} from '@services/productsApi';

// * components
import Product from '@components/screens/Product';

const ProductPage: React.FC<IProductPageProps> = observer(
    ({ currentProduct, similarProducts, allProducts }) => {
        useEffect(() => {
            if (similarProducts !== null && allProducts !== null) {
                product.setAllProducts(allProducts);
                product.setSimilarProducts(similarProducts);
            }
        }, []);

        return <Product currentProduct={currentProduct} />;
    },
);

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const currentProduct = await getProduct(params?.id);
    const similarProducts = await getFilteredProductsByCategory(
        currentProduct.categories[0].name,
        params?.id,
    );
    const allProducts =
        (await getAllProducts(
            filter.order,
            filter.sort,
            filter.searchValue,
            filter.select,
        )) || [];

    return {
        props: {
            currentProduct,
            similarProducts,
            allProducts,
        },
    };
};

export const getStaticPaths = async () => {
    const products =
        (await getAllProducts(
            filter.order,
            filter.sort,
            filter.searchValue,
            filter.select,
        )) || [];

    return {
        // @ts-ignore
        paths: products.edges.map(({ node: { id } }) => ({ params: { id } })),
        fallback: true,
    };
};

export default ProductPage;
