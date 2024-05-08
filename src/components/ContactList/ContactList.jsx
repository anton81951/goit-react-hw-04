import { useEffect, useState } from "react";
import clsx from "clsx";
import styles from "./ContactList.module.css";
import Contact from "../Contact/Contact";

const ContactList = ({ contacts, searchTerm, onDelete }) => {
  const [filteredContacts, setFilteredContacts] = useState([]);

  useEffect(() => {
    const filtered = contacts.filter((contact) =>
      contact.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredContacts(filtered);
  }, [contacts, searchTerm]);

  return (
    <ul className={clsx(styles.contactsOrder)}>
      {filteredContacts.map((contact) => (
        <li key={contact.id}>
          <Contact contact={contact} onDelete={onDelete} />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;