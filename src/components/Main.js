import React from 'react'
import Product from './Product';
import Card from './card';


const Main = ({products, onAdd, onRemove}) => {
    return ( 
    <main className=" col-12" style={{backgroundColor:"white"}}>
            <h2 style={{fontSize: "32px",
                  lineHeight: "43px",
                  fontWeight: "500",
                  padding:"0",
                  color: "#333333",
                  marginLeft: "70px",
                  textAlign:"center"}}>Products</h2>
            <div className="row">
        <div className="container-fluid" >
        <div className="row justify-content-center">
        {products.map((product) => (
        
        <Card onRemove={onRemove} onAdd={onAdd} key={product.id} product={product} />
        
        ))}   
        </div>
        </div>      
        </div> 

        </main>
    )
}

export default Main
