import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import css from './LoginForm.module.css';
import { logIn } from '../../redux/auth/operations';
import { useDispatch } from 'react-redux';

const ValidateSchema = Yup.object().shape({
  email: Yup.string().required('Name field is required.').trim(),
  password: Yup.string().required('Number field is required.'),
});

export default function LoginForm() {
  const dispatch = useDispatch();
  const handleSubmit = (values, actions) => {
    dispatch(logIn(values));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      onSubmit={handleSubmit}
      validationSchema={ValidateSchema}>
      <Form className={css.form} autoComplete="off">
        <ErrorMessage component="span" name="email" />
        <label className={css.label}>
          Email
          <Field type="email" name="email" className={css.form__input} />
        </label>
        <ErrorMessage component="span" name="password" />
        <label className={css.label}>
          Password
          <Field type="password" name="password" className={css.form__input}/>
        </label>
        <button className={css.button} type="submit">Log In</button>
      </Form>
    </Formik>
  );
}
