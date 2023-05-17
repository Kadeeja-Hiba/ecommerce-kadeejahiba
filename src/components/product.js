import styles from "./product.module.css";
import Image from "next/image";

const Product = () => {
  return (
    <div className={styles.product}>
      <Image
        width={300}
        height={300}
        src="/phone.jpg"
        className={styles.productImage}
      />
      <div className={styles.productDetails}>
        <p className={styles.title}>Samsung Galaxy M33 5G</p>
        <div className={styles.productInfo}>
          <p className={styles.price}>
            Rs <span>18499</span>
          </p>
        </div>
      </div>
    </div>
  );
};
export default Product;
