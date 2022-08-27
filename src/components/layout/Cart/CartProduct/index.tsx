// * styles
import styles from './CartProduct.module.scss';

const CartProduct = () => {
    return (
        <div className={styles.cartProduct}>
            <div className={styles.img} />
            <div className={styles.productInfo}>
                <h5>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </h5>
                <span>$50</span>
            </div>
        </div>
    );
};

export default CartProduct;
