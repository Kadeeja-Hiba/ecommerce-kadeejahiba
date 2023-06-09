import styles from "./navbarSearch.module.css";
import { UilSearch } from "@iconscout/react-unicons";

const NavbarSearch = (props) => {
  return (
    <div className={styles.navbarSearch}>
      <input
        className={styles.navbarSearchInput}
        placeholder={props.placeholder}
      />
      <UilSearch className={styles.navbarSearchIcon} />
    </div>
  );
};
export default NavbarSearch;
