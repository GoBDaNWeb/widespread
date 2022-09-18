// * react
import React, { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import { IProductProps } from './types';

// * store
import { observer } from 'mobx-react-lite';
import cart from '@store/cart';

// * styles
import styles from './Product.module.scss';

// * components
import AddButton from '@components/ui/AddButton';
import Title from '@components/ui/Title';
import ProductsList from '@components/common/ProductsList';

const Product: React.FC<IProductProps> = observer(
    ({ product, similarProducts, allProducts }) => {
        const [coordX, setCoordX] = useState<number>(0);
        const [coordY, setCoordY] = useState<number>(0);
        const [clientHeight, setClientHeight] = useState<number>(0);
        const [clientWidth, setClientWidth] = useState<number>(0);

        const imgRef = useRef<any>(null);
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
            backgroundImage: `url(${product?.images[0].url})`,
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
                            src={product?.images[0].url}
                            alt="product"
                            placeholder="blur"
                            blurDataURL="blur"
                            style={css}
                        />
                    </div>
                    <div className={styles.info}>
                        <Title variant="h2">{product?.name}</Title>
                        <span className={styles.price}>
$
{product?.price}
                        </span>
                        <p>{product?.description}</p>
                        <AddButton
                            fn={() =>
                                cart.isInCart(product)
                                    ? cart.removeProduct(product.id)
                                    : cart.addProduct(product)
                            }
                            isInCart={() => cart.isInCart(product)}
                        />
                    </div>
                </div>
                <div className={styles.reviews}>
                    <Title variant="h3">Отзывов пока что нет</Title>
                </div>
                <ProductsList products={similarProducts} title="Похожее" />
                <ProductsList products={allProducts} title="Все товары" />
            </div>
        );
    },
);

export default Product;
