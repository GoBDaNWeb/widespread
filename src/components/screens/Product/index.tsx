// * react
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';

// * services
import { getProduct } from '@services/productsApi';

// * styles
import styles from './Product.module.scss';

// * components
// import ProductCard from '@components/common/ProductCard';

const Product: React.FC<any> = ({ product }) => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className={styles.product}>
            <div className={styles.mainInfo}>
                <div className={styles.productImageWrapper}>
                    <Image
                        layout="fill"
                        src={product.images[0].url}
                        alt="product"
                        placeholder="blur"
                        blurDataURL
                    />
                </div>
                <div className={styles.info}>info</div>
            </div>
            <div className={styles.reviews}>reviews</div>
            {/* <div className={styles.otherProducts}>
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
            </div> */}
        </div>
    );
};

export default Product;
