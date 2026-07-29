import { NavLink } from 'react-router-dom';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <NavLink className={styles.logo} to="/">
          <span className={styles.logoIcon} aria-hidden="true" />
          <span>LearnLingo</span>
        </NavLink>

        <nav className={styles.navigation}>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/teachers">Teachers</NavLink>
        </nav>

        <div className={styles.auth}>
          <button className={styles.loginButton} type="button">
            <span className={styles.loginIcon} aria-hidden="true" />
            Log in
          </button>

          <button className={styles.registrationButton} type="button">
            Registration
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
