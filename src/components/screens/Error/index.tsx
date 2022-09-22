// * react/next
// import { useRouter } from 'next/router';

// * styles
import styles from './Error.module.scss';

// * component
import Title from '@components/ui/Title';

const Error = () => {
    // const router = useRouter()

    return (
        <div className={styles.error}>
            <div className={styles.content}>
                <Title variant="h1">Уууупс...</Title>
                <Title variant="h4">
                    Кажется вы зашли на страницу который не существует😔
                </Title>
            </div>
        </div>
    );
};

export default Error;
