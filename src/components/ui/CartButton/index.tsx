// * store
import { observer } from 'mobx-react-lite';
import cart from 'store/cart';

// * icons
import { RiShoppingCart2Line } from 'react-icons/ri';

// * styles
import styles from './CartButtom.module.scss';

const CartButton = observer(() => {
    return (
        <button
            onClick={() => cart.handleOpenCart()}
            className={styles.iconCart}
        >
            <RiShoppingCart2Line />
        </button>
    );
});

export default CartButton;
