// * react/next
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { IProductProps } from './types';

// * store
import { observer } from 'mobx-react-lite';
import cart from '@store/cart';

// * icons
import { AiOutlineCheck } from 'react-icons/ai';

// * styles
import styles from './ProductCard.module.scss';

// * components
import AddButton from '@components/ui/AddButton';
import Title from '@components/ui/Title';

const ProductCard: React.FC<IProductProps> = observer(({ product }) => {
    const isInCart = () => {
        const filtered = cart.cartProducts.filter(
            (cartProduct: any) => cartProduct.id === product.id,
        );

        if (filtered.length) {
            return true;
        }

        return false;
    };

    return (
        <Link href={`/product/${product.id}`}>
            <div className={styles.productWrapper}>
                <div className={styles.product}>
                    <Image
                        layout="fill"
                        src={product.images[0].url}
                        alt="product"
                        placeholder="blur"
                        blurDataURL="blur"
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
                        <Title variant="h5">{product.name}</Title>
                        <div className={styles.footerBtn}>
                            <AddButton
                                fn={() =>
                                    cart.isInCart(product)
                                        ? cart.removeProduct(product.id)
                                        : cart.addProduct(product)
                                }
                                isInCart={() => cart.isInCart(product)}
                            />
                            <span className={styles.price}>
                                $
{product.price}
                            </span>
                        </div>
                    </div>
                </div>
                {isInCart() && (
                    <div className={styles.inCart}>
                        <AiOutlineCheck />
                    </div>
                )}
            </div>
        </Link>
    );
});

export default ProductCard;
