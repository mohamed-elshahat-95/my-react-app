import { useEffect, useState } from "react";
import Product from "./Product";
import './ProductsList.css'

function ProductsList() {
  const api_url = "https://fakestoreapi.com/products";
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  const getProducts = () => {
    fetch(api_url)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  };

  const getCategories = () => {
    fetch(`${api_url}/categories`)
      .then((res) => res.json())
      .then((data) => setCategories(data));
  };

  const getProductInCategory = (catName) => {
    fetch(`${api_url}/category/${catName}`)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  };

  useEffect(() => {
    getProducts();
    getCategories();
  }, []);

  return (
    <>
      <h2 className="text-center p-3"> Our Products </h2>
      <div className="container">
        <button
          onClick={() => {
            getProducts();
          }}
          className="btn btn-info"
        >
          All
        </button>&nbsp;
        {categories.map((cat) => {
          return (
            <>
            <button
              key={cat}
              onClick={() => {
                getProductInCategory(cat);
              }}
              className="btn btn-info"
            >
              {cat}
            </button>&nbsp;
            </>
          );
        })}
        <br />
        <br />

        <div className="row">
          {products.map((product) => {
            return (
              <div className="col-3 row-s" key={product.id}>
                <Product product={product} showButton={true} />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default ProductsList;
