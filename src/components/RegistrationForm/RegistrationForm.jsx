import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import css from './RegistrationForm.module.css';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/operations';

const ValidateSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Name is too short, minimum 3 characters.')
    .max(50, 'Name is too long, maximum 50 characters.')
    .required('Name field is required.')
    .trim(),
  email: Yup.string()
    .email('Please enter a valid email address.')
    .required('Email field is required.')
    .trim(),
  password: Yup.string()
    .min(5, 'Password is too short, minimum 5 characters.')
    .max(50, 'Password is too long, maximum 50 characters.')
    .required('Password field is required.')
    .trim(),
});
export default function RegistrationForm() {
  const dispatch = useDispatch();
  const handleSubmit = (values, actions) => {
    console.log(values);
    dispatch(register(values));
    actions.resetForm(values);
  };

  return (
    <Formik
      initialValues={{
        name: '',
        email: '',
        password: '',
      }}
      onSubmit={handleSubmit}
      validationSchema={ValidateSchema}>
      <Form className={css.form} autoComplete="off">
        <ErrorMessage component="span" name="name" />
        <label className={css.label}>
          Username
          <Field type="text" name="name"  className={css.form__input} />
        </label>
        <ErrorMessage component="span" name="email" />
        <label className={css.label}>
          Email
          <Field type="email" name="email"  className={css.form__input} />
        </label>
        <ErrorMessage component="span" name="password" />
        <label className={css.label}>
          Password
          <Field type="password" name="password"  className={css.form__input}/>
        </label>
        <button className={css.button} type="submit">Register</button>
      </Form>
    </Formik>
  );
}
