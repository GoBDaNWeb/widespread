// * store
import { observer } from 'mobx-react-lite';
import cart from '@store/cart';

// * styles
import styles from './Cart.module.scss';

// * components
import CloseButton from '@components/ui/CloseButton';
import CartProduct from './CartProduct';

const Cart = observer(() => {
    return (
        <div
            onClick={(e) => e.stopPropagation()}
            className={`${styles.cart} ${!cart.isCartOpen && styles.hidden}`}
        >
            <div className={styles.cartMain}>
                <div className={styles.cartHeader}>
                    <h4>Корзина</h4>

                    <CloseButton fn={() => cart.handleOpenCart()} />
                </div>
                <div className={styles.cartContent}>
                    <CartProduct />
                </div>
            </div>
            <div className={styles.cartFooter}>
                <div>
                    <h4>Итого</h4>
                    $0
                </div>
                <button>Оформить заказ</button>
            </div>
        </div>
    );
});

export default Cart;
