// * react
import React from 'react';
import Image from 'next/image';
import { ICartProductProps } from './types';

// * store
import { observer } from 'mobx-react-lite';
import cart from '@store/cart';

// * icons
import { GrAdd, GrFormSubtract } from 'react-icons/gr';
import { IoIosRepeat } from 'react-icons/io';
import { AiOutlineClose } from 'react-icons/ai';

// * styles
import styles from './CartProduct.module.scss';

// * components
import Title from '@components/ui/Title';
import QuantityButton from '@components/ui/QuantityButton';

const CartProduct: React.FC<ICartProductProps> = observer(({ product }) => {
    const handleDisableProduct = () => {
        if (product.disabled) {
            cart.returnProduct(product.id);
        } else {
            cart.disableProduct(product.id);
        }
    };

    return (
        <div className={styles.cartProductWrapper}>
            <div
                className={`${styles.cartProduct} ${
                    product.disabled && styles.disabled
                }`}
            >
                <div className={styles.imgWrapper}>
                    <Image
                        layout="fill"
                        src={product.images[0].url}
                        alt="product"
                        placeholder="blur"
                        blurDataURL="blur"
                    />
                </div>

                <div className={styles.productInfo}>
                    <Title variant="h5">{product.name}</Title>
                    <span>
$
{product.price * product.quantity}
                    </span>
                </div>

                <div className={styles.quantity}>
                    <QuantityButton
                        fn={() => cart.deccreaseQuantity(product.id)}
                    >
                        <GrFormSubtract />
                    </QuantityButton>
                    {product.quantity}
                    <QuantityButton
                        fn={() => cart.increaseQuantity(product.id)}
                    >
                        <GrAdd />
                    </QuantityButton>
                </div>
            </div>
            <button
                onClick={() => handleDisableProduct()}
                className={styles.btn}
            >
                {product.disabled ? <IoIosRepeat /> : <AiOutlineClose />}
            </button>
        </div>
    );
});

export default CartProduct;
