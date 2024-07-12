import css from './Contact.module.css';
import { FaUser, FaPhone } from 'react-icons/fa6';

function Contact({ contact, onDelete }) {
  return (
    <div className={css.container}>
      <div>
        <div className={css.contactData}>
          <FaUser />
          <p>{contact.name}</p>
        </div>
        <div className={css.contactData}>
          <FaPhone />
          <p>{contact.number}</p>
        </div>
      </div>
      <button onClick={() => onDelete(contact.id)}>Delete</button>
    </div>
  );
}
export default Contact;
