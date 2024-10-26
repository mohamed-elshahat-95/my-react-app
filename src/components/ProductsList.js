import Product from "./Product";
import ProductsData from "./ProductsData";
function ProductsList() {
  return (
    <>
      <h3>Products List: </h3>
      {ProductsData.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </>
  );
}

export default ProductsList;
