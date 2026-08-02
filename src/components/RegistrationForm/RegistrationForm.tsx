import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

import styles from './RegistrationForm.module.css';

type RegistrationFormValues = {
  name: string;
  email: string;
  password: string;
};

const validationSchema = Yup.object({
  name: Yup.string()
    .trim()
    .min(2, 'Name must contain at least 2 characters')
    .required('Name is required'),

  email: Yup.string()
    .email('Please enter a valid email')
    .required('Email is required'),

  password: Yup.string()
    .min(6, 'Password must contain at least 6 characters')
    .required('Password is required'),
});

const RegistrationForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegistrationFormValues>({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = (data: RegistrationFormValues) => {
    console.log(data);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)} noValidate>
      <h2 className={styles.title}>Registration</h2>
      <p className={styles.description}>
        Thank you for your interest in our platform! In order to register, we
        need some information. Please provide us with the following information
      </p>
      <div className={styles.fields}>
        <div className={styles.field}>
          <input
            type="text"
            placeholder="Name"
            aria-invalid={Boolean(errors.name)}
            {...register('name')}
          />
          {errors.name && (
            <p className={styles.error} role="alert">
              {errors.name.message}
            </p>
          )}
        </div>
        <div className={styles.field}>
          <input
            type="email"
            placeholder="Email"
            aria-invalid={Boolean(errors.email)}
            {...register('email')}
          />
          {errors.email && (
            <p className={styles.error} role="alert">
              {errors.email.message}
            </p>
          )}
        </div>
        <div className={styles.field}>
          <input
            type="password"
            placeholder="Password"
            aria-invalid={Boolean(errors.password)}
            {...register('password')}
          />
          {errors.password && (
            <p className={styles.error} role="alert">
              {errors.password.message}
            </p>
          )}
        </div>
      </div>
      <button type="submit" className={styles.submitButton}>
        Sign Up
      </button>
    </form>
  );
};

export default RegistrationForm;
