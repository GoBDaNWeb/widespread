// * styles
import styles from './Navigation.module.scss';

const Navigation = () => {
    return (
        <>
            <ul className={styles.navigation}>
                <li>
                    Верх
                    <ul className={styles.hiddenMenu}>
                        <li>Футболки</li>
                        <li>Рубашки</li>
                    </ul>
                </li>
                <li>
                    Низ
                    <ul className={styles.hiddenMenu}>
                        <li>Штаны</li>
                        <li>Брюки</li>
                        <li>Шорты</li>
                    </ul>
                </li>
                <li>
                    Худи & Свитшоты
                    <ul className={styles.hiddenMenu}>
                        <li>Худи</li>
                        <li>Свитшоты</li>
                    </ul>
                </li>
            </ul>
        </>
    );
};

export default Navigation;
