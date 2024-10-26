function Product(props) {
    return (
        <div>
            <p>Title: {props.product.title}</p>
            <p>Price: {props.product.price}</p>
        </div>
    )
}

export default Product;