// * styles
import styles from './Hero.module.scss';

// * components

const Hero = () => {
    return (
        <div className={styles.hero}>
            <img src="hero.jpg" alt="hero" />
        </div>
    );
};

export default Hero;
