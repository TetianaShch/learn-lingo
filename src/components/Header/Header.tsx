import { useState } from 'react';
import { NavLink } from 'react-router-dom';

import Modal from '../Modal/Modal';
import LoginForm from '../LoginForm/LoginForm';
import styles from './Header.module.css';

type ModalType = 'login' | 'registration' | null;

const Header = () => {
  const [activeModal, setActiveModal] = useState<ModalType>(null);

  const handleCloseModal = () => {
    setActiveModal(null);
  };

  return (
    <>
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
            <button
              className={styles.loginButton}
              type="button"
              onClick={() => setActiveModal('login')}
            >
              <span className={styles.loginIcon} aria-hidden="true" />
              Log in
            </button>

            <button
              className={styles.registrationButton}
              type="button"
              onClick={() => setActiveModal('registration')}
            >
              Registration
            </button>
          </div>
        </div>
      </header>
      {activeModal === 'login' && (
        <Modal onClose={handleCloseModal}>
          <LoginForm />
        </Modal>
      )}
    </>
  );
};

export default Header;
