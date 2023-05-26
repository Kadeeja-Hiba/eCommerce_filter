import styles from "./Navbar.module.css";
import Search from "./search";

const Navbar = () => {
  return (
    <div className={styles.Navbar}>
      <div className={styles.navLeft}>
        <h1 className={styles.navLogo}>
          <img src="/logo.png" className={styles.logoImg} />
          <img src="/icon.png" className={styles.iconImg} />
        </h1>
      </div>
      <Search />
      <div className={styles.navRight}>
        <p>HOME</p>
        <p>MY ORDERS</p>
        <p>CART</p>
        <p>LOGIN</p>
      </div>
    </div>
  );
};
export default Navbar;
