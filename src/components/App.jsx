import { useState, useEffect } from "react";
import clsx from "clsx";
import styles from "./App.module.css";
import ContactForm from "./ContactForm/ContactForm";
import ContactList from "./ContactList/ContactList";
import SearchBox from "./SearchBox/SearchBox";

const App = () => {
  const [contacts, setContacts] = useState(() => {
    const storedContacts = JSON.parse(localStorage.getItem("contacts"));
    return storedContacts || [];
  });

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleAddContact = (newContact) => {
    setContacts([...contacts, newContact]);
  };

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const deleteContact = (contactId) => {
    setContacts((prevContacts) =>
      prevContacts.filter((cont) => cont.id !== contactId)
    );
  };

  return (
    <div className={clsx(styles.general)}>
      <h1 className={clsx(styles.title)}>Phone book</h1>
      <ContactForm addNewContact={handleAddContact} />
      <SearchBox value={searchTerm} onChange={handleSearchChange} />
      <ContactList
        contacts={filteredContacts}
        searchTerm={searchTerm}
        onDelete={deleteContact}
      />
    </div>
  );
};

export default App;