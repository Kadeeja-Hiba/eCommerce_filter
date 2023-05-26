import { UilSearch } from "@iconscout/react-unicons";
import styles from "./search.module.css";

const Search = () => {
  return (
    <div className={styles.search}>
      <input className={styles.searchInput} placeholder="Search Product" />
      <UilSearch className={styles.searchIcon} />
    </div>
  );
};
export default Search;
