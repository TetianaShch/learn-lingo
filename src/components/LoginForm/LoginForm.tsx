import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

import styles from './LoginForm.module.css';

type LoginFormValues = {
  email: string;
  password: string;
};

const validationSchema = Yup.object({
  email: Yup.string()
    .email('Please enter a valid email')
    .required('Email is required'),

  password: Yup.string()
    .min(6, 'Password must contain at least 6 characters')
    .required('Password is required'),
});

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormValues>({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = (data: LoginFormValues) => {
    console.log(data);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)} noValidate>
      <h2 className={styles.title}>Log In</h2>

      <p className={styles.description}>
        Welcome back! Please enter your credentials to access your account and
        continue your search for a teacher.
      </p>

      <div className={styles.fields}>
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

      <button className={styles.submitButton} type="submit">
        Log In
      </button>
    </form>
  );
};

export default LoginForm;
