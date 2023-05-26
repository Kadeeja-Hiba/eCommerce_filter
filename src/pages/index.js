import Navbar from "@/components/Navbar";
import styles from "@/styles/Home.module.css";
import Products from "@/components/products.js";
import { useState, useEffect } from "react";
import Checkbox from "@/components/checkbox.js";
import { buildQuery } from "@/utils";

const Home = () => {
  const [products, setProduct] = useState([]);
  const [brands, setBrands] = useState([]);
  const [categories, setCategories] = useState([]);

  const getProductsFromApi = async () => {
    const products = await fetch("http://localhost:3000/api/product");
    const jsonProducts = await products.json();
    setProduct(jsonProducts);
  };

  useEffect(() => {
    getProductsFromApi();
  }, []);

  const handleBrandCheckbox = (e, label) => {
    if (e.target.checked) {
      setBrands([...brands, label]);
      callFilterApi([...brands, label], categories);
    } else {
      const filteredBrands = brands.filter((item) => item != label);
      setBrands(filteredBrands);
      callFilterApi(filteredBrands, categories);
    }
  };

  const handleCategoryCheckbox = (e, label) => {
    if (e.target.checked) {
      setCategories([...categories, label]);
      callFilterApi(brands, [...categories, label]);
    } else {
      const filteredCategories = categories.filter((item) => item != label);
      setCategories(filteredCategories);
      callFilterApi(brands, filteredCategories);
    }
  };

  const callFilterApi = async (brands, categories) => {
    let queryBrands = buildQuery("brand", brands);
    let queryCategories = buildQuery("category", categories);
    let query = queryBrands + queryCategories;
    const products = await fetch(`http://localhost:3000/api/product?${query}`);
    const jsonProducts = await products.json();
    setProduct(jsonProducts);
  };

  return (
    <div>
      <Navbar />
      <div>
        <img src="/banner5.png" className={styles.bannerImg}></img>
      </div>
      <div className={styles.mainContainer}>
        <div className={styles.homeProduct}>
          {products.map((item) => (
            <Products {...item} />
          ))}
        </div>
        <div className={styles.homeFilter}>
          <h1>Filters</h1>
          <h4 className={styles.filterHeading}>Brands</h4>
          <Checkbox label="Samsung" onCheckboxClicked={handleBrandCheckbox} />
          <Checkbox label="Apple" onCheckboxClicked={handleBrandCheckbox} />
          <Checkbox
            label="Allen Solly"
            onCheckboxClicked={handleBrandCheckbox}
          />
          <Checkbox label="IKEAI" onCheckboxClicked={handleBrandCheckbox} />
          <h4 className={styles.filterHeading}>Category</h4>
          <Checkbox
            label="Mobile Phones"
            onCheckboxClicked={handleCategoryCheckbox}
          />
          <Checkbox
            label="Furniture"
            onCheckboxClicked={handleCategoryCheckbox}
          />
          <Checkbox label="Laptop" onCheckboxClicked={handleCategoryCheckbox} />
          <Checkbox
            label="Men Clothes"
            onCheckboxClicked={handleCategoryCheckbox}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
