import React from 'react'
const Product = ({product, onAdd}) => {
    return (
        <div  style={{paddingLeft: "70px", paddingRight: "70px"}} className="d-flex flex-column justify-content-center align-items-center col-3" >
            <img className="small" src={product.img} alt={product.name} />
            <h3>{product.name}</h3>
            <h3>PKR {product.price}</h3>
            <div>
                <button onClick={() => onAdd(product)} className="cartButton">
                    Add to Cart
                </button>
            </div>
        </div>
    )
}

export default Product
