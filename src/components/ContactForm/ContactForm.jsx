import { nanoid } from 'nanoid';
import { useId } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import css from './ContactForm.module.css';

const UserAddSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Too short!')
    .max(50, 'Too long!')
    .required('Required!'),
  number: Yup.string()
    .matches(/^\d{3}-\d{2}-\d{2}$/, 'xxx-xx-xx')
    .required('Required!'),
});

function ContactForm({ onAdd }) {
  const nameFieldId = useId();
  const numberFieldId = useId();
  const handleSubmit = (values, actions) => {
    onAdd({ ...values, id: nanoid() });
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      onSubmit={handleSubmit}
      validationSchema={UserAddSchema}
    >
      <Form className={css.container}>
        <div className={css.formItem}>
          <label htmlFor={nameFieldId}>Name</label>
          <Field name="name" id={nameFieldId} />
          <ErrorMessage name="name" className={css.error} component="span" />
        </div>
        <div className={css.formItem}>
          <label htmlFor={numberFieldId}>Number</label>
          <Field name="number" id={numberFieldId} />
          <ErrorMessage name="number" className={css.error} component="span" />
        </div>
        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
}
export default ContactForm;
