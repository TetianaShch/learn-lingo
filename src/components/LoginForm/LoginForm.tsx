import styles from './LoginForm.module.css';

const LoginForm = () => {
  return (
    <form className={styles.form}>
      <h2 className={styles.title}>Log In</h2>

      <p className={styles.description}>
        Welcome back! Please enter your credentials to access your account and
        continue your search for a teacher.
      </p>

      <div className={styles.fields}>
        <input type="email" name="email" placeholder="Email" />

        <input type="password" name="password" placeholder="Password" />
      </div>

      <button className={styles.submitButton} type="submit">
        Log In
      </button>
    </form>
  );
};

export default LoginForm;