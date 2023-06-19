import css from './contactList.module.css'

const ContactList = ({ contacts, onDeleteContact }) => (
    <ul className={css.contactList}>
      {contacts.map(({ id, name, number }) => (
        <li className={css.contactListitem} key={id}>
          <span>{name}: {number}</span>
          <button className={css.delBtn} type="button" onClick={() => onDeleteContact(id)}>Delete</button>
        </li>
      ))}
    </ul>
  );

export default ContactList;
