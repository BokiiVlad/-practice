import { Field, Formik, Form } from "formik";
import css from "./ContactForm.module.css";
import { useId } from "react";

function ContactForm({ addContact }) {
  const idNumber = useId();
  const idContact = useId();
  const idName = useId();

  const handleSubmit = (values, action) => {
    addContact({
      id:idContact,
      name: values.name,
      number: values.number,
    });
    action.resetForm()
  };

 const initialValues = {
  name: "",
  number: "",
}

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <Form >
        <div className={css.field}>
          <label className={css.label} htmlFor={idName}>
            Name
          </label>
          <Field  name="name" id={idName} />
          <label htmlFor={idNumber}>Namber</label>
          <Field type="tel" name="number" id={idNumber} />
        </div>
        <button className={css.delete} type="submit">Add contact</button>
      </Form>
    </Formik>
  );
}
export default ContactForm;
