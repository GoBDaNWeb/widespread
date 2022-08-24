// * react

// * icons
import { RiShoppingCart2Line } from 'react-icons/ri';

// * styles
import styles from './AddButton.module.scss';

const AddButton = () => {
    return (
        <button onClick={(e) => e.preventDefault()} className={styles.btn}>
            <RiShoppingCart2Line />
            <span>+</span>
        </button>
    );
};

export default AddButton;
