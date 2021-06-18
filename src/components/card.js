import React from 'react'
const card = ({title, imageURL, body}) => {
    return (
    
       <div>
        
        <div className="card-container">
            <div className="image-container">
                <img class="img-card"src={imageURL} alt="" />
            </div>
            <div className="card-content">
            <div className="card-title">
                <h3>{title}</h3>
            </div>
            <div className="card-body">
                <p>{body}</p>
            </div>
            <div className="btn">
                <button>
                    <a>
                        Add to Cart
                    </a>
                </button>
            </div>
            </div>
        </div>
        
        </div>
    )
}

export default card
