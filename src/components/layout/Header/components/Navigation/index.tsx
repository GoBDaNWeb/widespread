// * react/next
import Link from 'next/link';

// * constants
import {
    tShirtsCategorySlug,
    shirtsCategorySlug,
    hoodiesCategorySlug,
    sweatshirtsCategorySlug,
    pantsCategorySlug,
    suitPantsCategorySlug,
    topCollectionSlug,
    bottomCollectionSlug,
    hoodiesCollectionSlug,
} from '../../../../../constants';

// * styles
import styles from './Navigation.module.scss';

const Navigation = () => {
    return (
        <>
            <ul className={styles.navigation}>
                <Link href={`/collection/${topCollectionSlug}`}>
                    <li>
                        Верх
                        <ul
                            onClick={(e) => e.stopPropagation()}
                            className={styles.hiddenMenu}
                        >
                            <Link href={`/category/${tShirtsCategorySlug}`}>
                                <li>Футболки</li>
                            </Link>
                            <Link href={`/category/${shirtsCategorySlug}`}>
                                <li>Рубашки</li>
                            </Link>
                        </ul>
                    </li>
                </Link>
                <Link href={`/collection/${bottomCollectionSlug}`}>
                    <li>
                        Низ
                        <ul
                            onClick={(e) => e.stopPropagation()}
                            className={styles.hiddenMenu}
                        >
                            <Link href={`/category/${pantsCategorySlug}`}>
                                <li>Штаны</li>
                            </Link>
                            <Link href={`/category/${suitPantsCategorySlug}`}>
                                <li>Брюки</li>
                            </Link>
                        </ul>
                    </li>
                </Link>
                <Link href={`/collection/${hoodiesCollectionSlug}`}>
                    <li>
                        Худи & Свитшоты
                        <ul
                            onClick={(e) => e.stopPropagation()}
                            className={styles.hiddenMenu}
                        >
                            <Link href={`/category/${hoodiesCategorySlug}`}>
                                <li>Худи</li>
                            </Link>
                            <Link href={`/category/${sweatshirtsCategorySlug}`}>
                                <li>Свитшоты</li>
                            </Link>
                        </ul>
                    </li>
                </Link>
            </ul>
        </>
    );
};

export default Navigation;
