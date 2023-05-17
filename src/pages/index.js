import Head from "next/head";
import styles from "@/styles/Home.module.css";
import UserNavbar from "@/components/usernavbar";
import Chips from "@/components/chips";
import Product from "@/components/product";

const chips = [
  "Mobile Phones",
  "Laptop",
  "Furniture",
  "Women Clothes",
  "Men Clothes",
];

export default function Home() {
  return (
    <div className={styles.home}>
      <UserNavbar currentPage="home" />
      <img className={styles.homeBanner} src="banner.jpg" />
      <div className={styles.homeCategory}>
        <h3>Shop by Category</h3>
        <div className={styles.categoryChip}>
          {chips.map((item) => (
            <Chips name={item} />
          ))}
        </div>
      </div>
      <div className={styles.homeProduct}>
        <Product />
      </div>
    </div>
  );
}
