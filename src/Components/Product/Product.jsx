import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "./ProductCard";
import Loader from "../../Pages/Loader/Loader";
import classes from "./Product.module.css"
function Product() {
  const [products, setProducts] = useState();
const [isLoading,setIsLoading]=useState(false)
  useEffect(() => {
     setIsLoading(true);
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        console.log(res);
        setProducts(res.data);
       setIsLoading(false)
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  }, []);
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <section className={classes.products_container}>
          {products?.map((singleProduct) => (
            <ProductCard
              product={singleProduct}
              key={singleProduct.id}
              add={true}
              slicetitle={true}
             
            />
          ))}
        </section>
      )}
    </>
  );
}

export default Product;
