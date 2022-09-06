// * store
import { observer } from 'mobx-react-lite';
import modal from '@store/modal';

// * styles
import styles from './Burger.module.scss';

const Burger = observer(() => {
    return (
        <div
            onClick={() => modal.handleOpenCart()}
            className={styles.burgerWrapper}
        >
            <div
                className={`${
                    modal.isModalOpen ? styles.burgerActive : styles.burger
                }`}
            />
        </div>
    );
});

export default Burger;
