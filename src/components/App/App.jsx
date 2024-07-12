import initialContacts from '../../contacts.json';
import './App.css';
import ContactForm from '../ContactForm/ContactForm';
import SearchBox from '../SearchBox/SearchBox';
import ContactList from '../ContactList/ContactList';
import { useState, useEffect } from 'react';


function App() {
  const [contacts, setContacts] = useState(() => {
    const savedContacts = window.localStorage.getItem('saved-contacts');

    if (savedContacts !== null) {
      return JSON.parse(savedContacts);
    }
    return initialContacts;
  });

  useEffect(() => {
    window.localStorage.setItem('saved-contacts', JSON.stringify(contacts));
  }, [contacts]);

  const [filter, setFilter] = useState('');

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  const handleAddContact = newContact => {
    setContacts(prevContacts => {
      return [...prevContacts, newContact];
    });
  };
  const deleteTask = contactId => {
    setContacts(prevContacts => {
      return prevContacts.filter(contact => contact.id !== contactId);
    });
  };

  return (
    <div>
      <h1 className="title"> Phonebook</h1>
      <ContactForm onAdd={handleAddContact} />
      <SearchBox vlaue={filter} onFilter={setFilter} />
      <ContactList contacts={filteredContacts} onDelete={deleteTask} />
    </div>
  );
}

export default App;
