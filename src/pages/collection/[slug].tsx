// * react/next
import React from 'react';
import { ICollectionPageProps, IProductResponse } from '@models/types';
import { GetStaticProps, GetStaticPaths } from 'next';

// * services
import {
    getAllProductsByCollection,
    getAllCollections,
} from '@services/productsApi';

// * components
import Collection from '@components/screens/Collection';

const CollectionPage: React.FC<ICollectionPageProps> = ({ products }) => {
    return <Collection products={products} />;
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const products: IProductResponse = await getAllProductsByCollection(
        params?.slug,
    );

    return {
        props: {
            products,
        },
    };
};

export const getStaticPaths: GetStaticPaths = async () => {
    const collections = await getAllCollections();

    return {
        // @ts-ignore
        paths: collections.map(({ slug }) => ({
            params: { slug },
        })),
        fallback: false,
    };
};

export default CollectionPage;
