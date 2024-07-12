import Contact from '../Contact/Contact';
import css from './ContactList.module.css';

function ContactList({ contacts, onDelete }) {
  return (
    <>
      <ul className={css.contactsList}>
        {contacts.map(contact => (
          <li key={contact.id}>
            <Contact contact={contact} onDelete={onDelete} />
          </li>
        ))}
      </ul>
    </>
  );
}

export default ContactList;
