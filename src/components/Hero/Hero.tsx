import { Link } from 'react-router-dom';
import styles from './Hero.module.css';

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <h1 className={styles.title}>
          Unlock your potential with the best{' '}
          <span className={styles.accent}>language</span> tutors
        </h1>

        <p className={styles.description}>
          Embark on an Exciting Language Journey with Expert Language Tutors:
          Elevate your language proficiency to new heights by connecting with
          highly qualified and experienced tutors.
        </p>

        <Link className={styles.link} to="/teachers">
          Get started
        </Link>
      </div>

      <div className={styles.imageWrapper}>{/* Зображення додамо далі */}</div>
    </section>
  );
};

export default Hero;
