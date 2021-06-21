import React from 'react'
const card = ({product, onAdd}) => {
    return (
        <React.Fragment>
       
         <div className="col-4 mt-5 d-flex justify-content-center align-items-center">
        <div className="card-container">
            <div className="image-container" >
                <img class="img-card" src={product.img} alt={product.name} />
            </div>
            <div className="card-content px-4 ">
            <div className="card-title p-0 my-2">
                <h3>{product.name}</h3>
            </div>
            <div className="card-body p-0 my-2">
                <p>PKR {product.price}</p>
            </div>
            <div>
                <button onClick={() => onAdd(product)} className="cartButton">
                    Add to Cart
                </button>
            </div>
            </div>
        </div>
        </div>
        
       
     </React.Fragment>
    )
}

export default card
