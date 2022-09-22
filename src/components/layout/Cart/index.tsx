// * store
import { observer } from 'mobx-react-lite';
import cart from '@store/cart';

// * styles
import styles from './Cart.module.scss';

// * components
import CloseButton from '@components/ui/CloseButton';
import CartProduct from './components/CartProduct';
import Title from '@components/ui/Title';

const Cart = observer(() => {
    return (
        <div
            onClick={(e) => e.stopPropagation()}
            className={`${styles.cart} ${!cart.isCartOpen && styles.hidden}`}
        >
            <div className={styles.cartMain}>
                <div className={styles.cartHeader}>
                    <div className={styles.title}>
                        <Title variant="h4">Корзина</Title>

                        <CloseButton fn={() => cart.handleOpenCart()} />
                    </div>

                    <div className={styles.info}>
                        <span>
                            Всего
                            {cart.cartProducts?.length}
                        </span>
                        <button
                            onClick={() => cart.removeProducts()}
                            className={styles.btn}
                        >
                            Удалить Неактивные Товары
                        </button>
                    </div>
                </div>

                <div className={styles.cartContent}>
                    {cart.cartProducts?.map((product: any) => (
                        <CartProduct key={product.id} product={product} />
                    ))}
                </div>
            </div>
            <div className={styles.cartFooter}>
                <div>
                    <h4>Итого</h4>
$
{cart.totalPrice()}
                </div>
                <button>Оформить заказ</button>
            </div>
        </div>
    );
});

export default Cart;
