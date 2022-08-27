// * store
import { observer } from 'mobx-react-lite';
import cart from 'store/cart';

// * icons
import { AiOutlineClose } from 'react-icons/ai';

// * styles
import styles from './CloseButton.module.scss';

const CloseButton = observer(() => {
    return (
        <button onClick={() => cart.handleOpenCart()} className={styles.btn}>
            <AiOutlineClose />
        </button>
    );
});

export default CloseButton;
