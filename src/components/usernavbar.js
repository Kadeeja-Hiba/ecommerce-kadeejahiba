import NavbarSearch from "./navbarSearch";
import styles from "./userNavbar.module.css";
import { UilShoppingCartAlt } from "@iconscout/react-unicons";
import Link from "next/link";

const UserNavbar = (props) => {
  return (
    <div className={styles.userNavbar}>
      <div className={styles.navLeft}>
        <UilShoppingCartAlt className={styles.navIcon} />
        <h1 className={styles.navLogo}>Shopy</h1>
      </div>
      <NavbarSearch placeholder="Search Products" />
      <div className={styles.navRight}>
        <p className={props.currentPage == "home" ? styles.active : null}>
          <Link href="/">Home</Link>
        </p>
        <p className={props.currentPage == "myorders" ? styles.active : null}>
          <Link href="/myOrders">My Orders</Link>
        </p>
        <p className={props.currentPage == "cart" ? styles.active : null}>
          <Link href="cart">Cart</Link>
        </p>
        <p className={props.currentPage == "account" ? styles.active : null}>
          <Link href="account">Account</Link>
        </p>
        <p className={props.currentPage == "login" ? styles.active : null}>
          Login
        </p>
      </div>
    </div>
  );
};
export default UserNavbar;
