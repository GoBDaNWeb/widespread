// * react/next
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { IProductProps } from './types';

// * styles
import styles from './ProductCard.module.scss';

// * components
import AddButton from '@components/ui/AddButton';

const ProductCard: React.FC<IProductProps> = ({ product }) => {
    return (
        <Link href={`/product/${product.id}`}>
            <div className={styles.product}>
                <Image
                    layout="fill"
                    src={product.images[0].url}
                    alt="product"
                    placeholder="blur"
                    blurDataURL
                />
                {product.new && (
                    <div
                        onClick={(e) => e.preventDefault()}
                        className={styles.newFeature}
                    >
                        <span>NEW</span>
                    </div>
                )}
                <div className={styles.productFooter}>
                    <AddButton />
                </div>
            </div>
        </Link>
    );
};

export default ProductCard;
