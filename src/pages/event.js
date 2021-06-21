import React from 'react'
import Card from '../components/card'
import NavBar from '../components/navbar';
import Footer from '../components/Footer';
import ProductSideBar from '../components/ProductSideBar';
import ProductTopMenu from '../components/ProductTopMenu';
const event = ({findProductHandler, priceHandler, products,onAdd, onRemove, categoryHandler}) => {
    return (
        <div>
    <NavBar />
    <hr />
    <div className="container-fluid" >
        <div className="row">
            <div className="col-12 d-flex justify-content-end align-content-center">
                <ProductTopMenu findProductHandler={findProductHandler} priceHandler={priceHandler} />
            </div>
        </div>
        <div className="row justify-content-center">
            <div className="col-2">
            <ProductSideBar categoryHandler={categoryHandler}/>
            </div>
            <div className="col-10">
                <div className="row justify-content-start">
        {products.map((product) => (
        <Card onRemove={onRemove} onAdd={onAdd} key={product.id} product={product} />
        ))}  
    </div>
    </div>
    </div>
    </div>
     <Footer />
     </div>
    
    )
        
}
export default event
