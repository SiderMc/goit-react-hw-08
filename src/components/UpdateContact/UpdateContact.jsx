import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import css from './UpdateContact.module.css';
import { useDispatch } from 'react-redux';
import { updateContacts } from '../../redux/contacts/operations';

const ValidateSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Name is too short, minimum 3 characters.')
    .max(50, 'Name is too long, maximum 50 characters.')
    .required('Name field is required.')
    .trim(),
  number: Yup.string()
    .min(5, 'Number is too short, minimum 5 characters.')
    .max(15, 'Number is too long, maximum 15 characters.')
    .required('Number field is required.')
    .trim(),
});

export default function UpdateContact({ id, onClose }) {
  const dispatch = useDispatch();

  const handleChange = (values, actions) => {
    dispatch(updateContacts({ id, ...values }));
    actions.resetForm();
    onClose();
  };
  return (
    <Formik
      initialValues={{
        name: '',
        number: '',
      }}
      onSubmit={handleChange}
      validationSchema={ValidateSchema}>
      <Form className={css.form} autoComplete="off">
        <ErrorMessage component="span" name="name" />
        <label className={css.form__label}>
          <Field
            type="text"
            name="name"
            placeholder="Name"
            className={css.form__input}
          />
        </label>
        <ErrorMessage component="span" name="number" />
        <label className={css.form__label}>
          <Field
            type="text"
            name="number"
            placeholder="Number"
            className={css.form__input}
          />
        </label>
        <div className={css.button__actions}>
          <button type="submit" className={css.button}>
            Change
          </button>
          <button type="button" className={css.button} onClick={onClose}>
            Close
          </button>
        </div>
      </Form>
    </Formik>
  );
}
