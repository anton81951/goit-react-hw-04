import { Formik, Form, Field } from "formik";
import clsx from "clsx";
import styles from "./SearchBox.module.css";

const SearchBox = ({ value, onChange }) => {
  return (
    <Formik initialValues={{ search: value }} onSubmit={() => {}}>
      <Form className={styles.searchBox}>
        <label htmlFor="search">Find contacts by name</label>
        <Field
          className={styles.searchField}
          type="text"
          name="search"
          id="search"
          placeholder="Enter name"
          value={value}
          onChange={onChange}
        />
      </Form>
    </Formik>
  );
};

export default SearchBox;