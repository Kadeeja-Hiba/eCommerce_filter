import styles from "./products.module.css";
import Image from "next/image";
import { UilShoppingBag } from "@iconscout/react-unicons";

const Products = (props) => {
  return (
    <div className={styles.products}>
      <Image
        width={290}
        height={250}
        src={props.thumbnailImage}
        className={styles.productsImg}
      />
      <div className={styles.productsDetails}>
        <p className={styles.title}>{props.title}</p>
        <div className={styles.productsInfo}>
          <p className={styles.priceTag}>price</p>
          <p className={styles.price}>
            {props.price}
            <span className={styles.actualPrice}>{props.actualPrice}</span>
          </p>
        </div>
        <UilShoppingBag className={styles.cartBtn} />
      </div>
    </div>
  );
};
export default Products;
