import css from './ContactForm.module.css';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useId } from 'react';
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contacts/operations';
import { showMessage } from '../../redux/contacts/slice';

export default function ContactForm() {
  const dispatch = useDispatch();
  const id = useId();

  const initialValues = {
    name: '',
    number: '',
  };

  const ValidateSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, 'Name is too short, minimum 3 letters.')
      .max(50, 'Name is too long, maximum 50 letters.')
      .required('Name field is required.')
      .trim(),
    number: Yup.string()
      .min(3, 'Number is too short, minimum 3 digits.')
      .max(50, 'Number is too long, maximum 50 digits.')
      .required('Number field is required.')
      .trim(),
  });
  const handleContacts = async (values, actions) => {
    dispatch(addContact(values));
    dispatch(showMessage(`Contact ${values.name} added in your list`));
    actions.resetForm();
  };

  return (
    <div className={css.form__content}>
      <Formik
        initialValues={initialValues}
        onSubmit={handleContacts}
        validationSchema={ValidateSchema}>
        <Form className={css.form}>
          <div className={css.form__group}>
            <label htmlFor={`${id}-name`} className={css.form__label}>
              <span>*</span>Name
            </label>
            <Field
              type="text"
              className={css.form__input}
              name="name"
              id={`${id}-name`}
              placeholder="Enter name"
              autoComplete="off"
            />
            <ErrorMessage component="span" name="name" />
          </div>
          <div className={css.form__group}>
            <label htmlFor={`${id}-number`} className={css.form__label}>
              <span>*</span>Number
            </label>
            <Field
              type="text"
              className={css.form__input}
              id={`${id}-number`}
              name="number"
              placeholder="Enter number"
              autoComplete="off"
            />
            <ErrorMessage component="span" name="number" />
          </div>
          <button className={css.button} type="submit">
            Add contact
          </button>
        </Form>
      </Formik>
    </div>
  );
}
