import css from "./ContactForm.module.css";
import { useId } from "react";

function ContactForm({ addContact }) {

  const idContact = useId();

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    
    addContact({
      id:idContact,
      name: form.elements.name.value,
      number: form.elements.number.value,
    });
    form.reset()
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className={css.field}>
          <label className={css.label} htmlFor="name">
            Name
          </label>
          <input type="text" name="name" id="name" />
          <label htmlFor="number">Namber</label>
          <input type="namber" name="number" id="number" />
        </div>
        <button className={css.delete} type="submit">Add contact</button>
      </form>
    </>
  );
}
export default ContactForm;
