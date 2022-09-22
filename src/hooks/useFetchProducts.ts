// * react
import { useState, useEffect, useCallback } from 'react';
import { IProductResponse } from '@models/types';

// * services
import { getAllProducts } from '@services/productsApi';

export default function useFecthProducts(
    order: string,
    sort: string | null,
    search: string,
    select: string | null,
) {
    const [products, setProducts] = useState<IProductResponse>();
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [error, setError] = useState<string>('');

    const fetching = useCallback(
        async (
            order: string,
            sort: string | null,
            search: string,
            select: string | null,
            next?: string | null,
            prev?: string | null,
        ) => {
            setIsLoading(true);
            try {
                const products = await getAllProducts(
                    order,
                    sort,
                    search,
                    select,
                    next,
                    prev,
                );
                setProducts(products);
            } catch (err: any) {
                console.error(err.message);
                setError(err);
            } finally {
                setIsLoading(false);
            }
        },
        [],
    );

    const prevPage = useCallback((prev?: string | null) => {
        fetching(order, sort, search, select, null, prev);
    }, []);

    const nextPage = useCallback((next?: string | null) => {
        fetching(order, sort, search, select, next);
    }, []);

    useEffect(() => {
        fetching(order, sort, search, select);
    }, []);

    return {
        data: products,
        refetch: fetching,
        prevPage,
        nextPage,
        isLoading,
        error,
    };
}
