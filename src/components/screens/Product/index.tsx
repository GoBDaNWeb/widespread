// * react/next
import React, { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import { IProductProps } from './types';

// * store
import { observer } from 'mobx-react-lite';
import cart from '@store/cart';
import filter from '@store/filter';
import product from '@store/product';

// * hooks
import useDebounce from '@hooks/useDebounce';
import useFecthProducts from '@hooks/useFetchProducts';

// * styles
import styles from './Product.module.scss';

// * components
import AddButton from '@components/ui/AddButton';
import Title from '@components/ui/Title';
import ProductsList from '@components/common/ProductsList';
import Filters from '@components/common/Filterts';

const Product: React.FC<IProductProps> = observer(({ currentProduct }) => {
    const [coordX, setCoordX] = useState<number>(0);
    const [coordY, setCoordY] = useState<number>(0);
    const [clientHeight, setClientHeight] = useState<number>(0);
    const [clientWidth, setClientWidth] = useState<number>(0);

    const imgRef = useRef<any>(null);

    const {
        data: allProducts,
        refetch,
        prevPage,
        nextPage,
        isLoading,
    } = useFecthProducts(
        filter.order,
        filter.sort,
        filter.searchValue,
        filter.select,
    );

    const debounce = useDebounce(filter.searchValue);

    useEffect(() => {
        refetch(filter.order, filter.sort, filter.searchValue, filter.select);
    }, [filter.order, filter.sort, debounce, filter.select]);

    useEffect(() => {
        if (allProducts) {
            filter.handleHasNextPage(allProducts.pageInfo.hasNextPage);
            filter.handleHasPrevPage(allProducts.pageInfo.hasPreviousPage);
            filter.setNextCursor(allProducts.pageInfo.endCursor);
            filter.setPrevCursor(allProducts.pageInfo.startCursor);
        }
    }, [allProducts]);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const css = {
        transform: `translate(${-(coordX - clientWidth / 1.3)}px, ${-(
            coordY -
            clientHeight / 1.5
        )}px) `,
    };
    const bg = {
        backgroundImage: `url(${currentProduct?.images[0].url})`,
        filter: 'blur(10px)',
    };

    return (
        <div className={styles.product}>
            <div className={styles.mainInfo}>
                <div
                    onMouseMove={(e) => {
                        setCoordX(e.clientX);
                        setCoordY(e.clientY);
                        setClientHeight(imgRef.current.clientHeight);
                        setClientWidth(imgRef.current.clientWidth);
                    }}
                    onMouseLeave={() => {
                        setCoordX(0);
                        setCoordY(0);
                        setClientWidth(0);
                        setClientHeight(0);
                    }}
                    ref={imgRef}
                    className={styles.productImageWrapper}
                >
                    <div style={bg} className={styles.bg} />

                    <Image
                        layout="fill"
                        src={currentProduct?.images[0].url}
                        alt="product"
                        placeholder="blur"
                        blurDataURL="blur"
                        style={css}
                    />
                </div>
                <div className={styles.info}>
                    <Title variant="h2">{currentProduct?.name}</Title>
                    <span className={styles.price}>
                        $
{currentProduct?.price}
                    </span>
                    <p>{currentProduct?.description}</p>
                    <AddButton
                        fn={() =>
                            cart.isInCart(currentProduct)
                                ? cart.removeProduct(currentProduct?.id)
                                : cart.addProduct(currentProduct)
                        }
                        isInCart={() => cart.isInCart(currentProduct)}
                    />
                </div>
            </div>
            <div className={styles.reviews}>
                <Title variant="h3">Отзывов пока что нет</Title>
            </div>
            <ProductsList
                products={product.similarProducts}
                title="Похожее"
                isLoading={false}
                isPaginate={false}
            />
            <Filters title="Все товары" />
            <ProductsList
                products={allProducts?.edges}
                isLoading={isLoading}
                isPaginate
                prevPage={() => prevPage(filter.prevCursor)}
                nextPage={() => nextPage(filter.nextCursor)}
            />
        </div>
    );
});

export default Product;
