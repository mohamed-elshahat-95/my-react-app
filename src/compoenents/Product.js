import { Link } from "react-router-dom";
import './Product.css'

function Product(props) {
  const { product, showButton } = props;

  return (
    <>
      <div className="card card-s">
        <img src={product.image} className="card-img-top image-s image-s" alt={product.title} />
        <div className="card-body">
          <h5 className="card-title card-title-s">{product.title}</h5>
          <p className="card-text card-text-s">{product.description}</p>
          <p> Price: {product.price}$</p>
          {showButton && (
            <Link className="btn btn-primary" to={`/product/${product.id}`}>
              Details
            </Link>
          )}
        </div>
      </div>
    </>
  );
}

export default Product;
