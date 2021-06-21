import React , {useState, useEffect} from 'react'
import NavBar from '../components/navbar';
import Header from '../components/Header';
import Basket from '../components/Basket';
import Main from '../components/Main';
import Footer from '../components/Footer';

const Index = ({onRemove, onAdd, cartItems, setCartItems, products}) => {
  
    return (
        <div className="row">
        <NavBar />
        <hr />
        <Header countCartItems={cartItems.length}/>
        <div className="row">
        <Basket onRemove={onRemove} onAdd={onAdd} cartItems={cartItems} setCartItems={setCartItems}/>
        <Main onRemove={onRemove} onAdd={onAdd} products={products} />
        </div>
        <Footer />
      </div>
    )
}

export default Index
