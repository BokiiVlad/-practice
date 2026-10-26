import css from "./ContactList.module.css"

function ContactList({ array,onDelete }) {

  return (
    <ul className={css.list}>
      {array.map(({ id, name, number }) => {
        return (
          <li className={css.number} key={id}>
            <div>
            <p>{name}</p>
            <p>{number}</p>
            </div>
            <button onClick={()=>onDelete(id)}>Delete</button>
          </li>
        );
      })}
    </ul>
  );
}
export default ContactList;
