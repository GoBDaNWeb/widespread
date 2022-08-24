// * react
import { Link } from 'react-router-dom';

// * styles
import styles from './ProductCard.module.scss';

// * components
import AddButton from '@components/ui/AddButton';

const ProductCard = () => {
    return (
        <Link to={`/product/${123}`}>
            <div className={styles.product}>
                <div
                    onClick={(e) => e.preventDefault()}
                    className={styles.newFeature}
                >
                    <span>NEW</span>
                </div>
                <AddButton />
            </div>
        </Link>
    );
};

export default ProductCard;
