import clsx from "clsx";
import styles from "./Contact.module.css";
import { HiUser, HiPhone } from "react-icons/hi";

const Contact = ({ contact: { name, number, id }, onDelete }) => {
  return (
    <div className={clsx(styles.contactContainer)}>
      <address>
        <div className={clsx(styles.nameBox)}>
          <HiUser />
          <span className={clsx(styles.nameSize)}>{name}</span>
        </div>
        <div className={clsx(styles.nameBox)}>
          <HiPhone />
          <span className={clsx(styles.nameSize)}>{number}</span>
        </div>
      </address>
      <form>
        <button type="button" className={clsx(styles.buttonFrame)} onClick={()=>onDelete(id)}>Delete</button>
      </form>
    </div>
  );
};

export default Contact;