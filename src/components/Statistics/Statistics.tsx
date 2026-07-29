import styles from './Statistics.module.css';

const Statistics = () => {
  return (
    <section className={styles.statistics}>
      <ul className={styles.list}>
        <li className={styles.item}>
          <p className={styles.value}>32,000 +</p>
          <p className={styles.label}>Experienced tutors</p>
        </li>

        <li className={styles.item}>
          <p className={styles.value}>300,000 +</p>
          <p className={styles.label}>5-star tutor reviews</p>
        </li>

        <li className={styles.item}>
          <p className={styles.value}>120 +</p>
          <p className={styles.label}>Subjects taught</p>
        </li>

        <li className={styles.item}>
          <p className={styles.value}>200 +</p>
          <p className={styles.label}>Tutor nationalities</p>
        </li>
      </ul>
    </section>
  );
};

export default Statistics;
