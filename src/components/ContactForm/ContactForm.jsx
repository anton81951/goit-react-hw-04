import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { nanoid } from "nanoid";
import styles from "./ContactForm.module.css";

const ContactSchema = Yup.object().shape({
  name: Yup.string().min(3, "Too Short!").max(50, "Too Long!").required("Required"),
  number: Yup.string().min(3, "Too Short!").max(50, "Too Long!").required("Required"),
});

const ContactForm = ({ addNewContact }) => {
  const handleSubmit = (values, actions) => {
    const newContact = {
      id: nanoid(), 
      name: values.name,
      number: values.number
    };
    addNewContact(newContact);
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{ name: "", number: "" }}
      onSubmit={handleSubmit}
      validationSchema={ContactSchema}
    >
        <Form className={styles.inputForm}>
          <div className={styles.inputSection}>
            <label htmlFor="name">Name</label>
            <Field className={styles.inputField} type="text" name="name" id="name" />
            <ErrorMessage name="name" component="span" className={styles.errorMsg} />
          </div>
          <div className={styles.inputSection}>
            <label htmlFor="number">Number</label>
            <Field className={styles.inputField} type="text" name="number" id="number" />
            <ErrorMessage name="number" component="span" className={styles.errorMsg} />
          </div>
          <button className={styles.inputBtn} type="submit">Add contact</button>
        </Form>
    </Formik>
  );
};

export default ContactForm;