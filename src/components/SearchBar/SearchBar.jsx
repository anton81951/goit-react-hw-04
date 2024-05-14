
import styles from "./SearchBar.module.css";
import { FaSearch } from "react-icons/fa";

const SearchBar = ({onSubmit}) => {
    return(
<header>
  <form className={styles.formWrap}>
  <button className={styles.searchBtn} type="submit"><FaSearch /></button>
    <input
    className={styles.inpurStyle}
      type="text"
      autoComplete="off"
      autoFocus
      placeholder="Search images and photos"
    />
    
  </form>
</header>
    );
};

export default SearchBar;

