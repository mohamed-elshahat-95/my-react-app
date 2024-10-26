import { useEffect, useState } from "react";
import Product from "./Product";
// import ProductsData from "./ProductsData";
function ProductsList() {
  
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
    .then(response => response.json())
    .then(data => setProducts(data));
  }, [])

  return (
    <>
      <h3>Products List: </h3>
      {/* Fetch data from file */}
      {/* {ProductsData.map((product) => (
        <Product key={product.id} product={product} />
      ))} */}

      {/* Fetch data using api request */}
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </>
  );
}

export default ProductsList;
