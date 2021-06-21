import React, { useState } from 'react';
import './styles/app.scss';
import NavBar from './components/navbar';
import { library } from '@fortawesome/fontawesome-svg-core';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/about';
import About from './pages/about';
import Events from './pages/event';
import AnnualReport from './pages/annual';
import Teams from './pages/team';
import Catalogue from './pages/blog';
import SignUp from './pages/signup';
import Newsletter from './components/Newsletter';
import dataa from './dataa';
import Cart from './pages/index';

function App() {
  const {products} = dataa; 
  const [pProducts, setpProducts] = useState(products);
  const [cartItems, setCartItems] = useState([]);
  const findProductHandler = (pName) => {
    console.log(pName);
    let  ppppProduct = products;
    if (pName !== "" && pName.length>1){
    ppppProduct= products.filter(x => { 
      return x.name.toLowerCase().includes(pName.toLowerCase())
    });
  }
    if (ppppProduct){
        setpProducts(ppppProduct);
    }
  }
  const priceHandler = (sort) => {
    if(sort === "asc"){
    
    let ppProduct = pProducts.sort((a,b) => (a.price > b.price)? 1 : -1); 
    setpProducts(ppProduct);}
    else{
      
      let pgProduct = pProducts.sort((a,b) => (a.price < b.price)? 1 : -1); 
      setpProducts(pgProduct); 
    }
  }
  const categoryHandler = (cat) => {
    if(cat==="all"){
      setpProducts(products);

    }
    else{
    let pProduct = products.filter(p => p.cat === cat); 
    setpProducts(pProduct);
    }

  }
  const onAdd = (product) => {
  const exist = cartItems.find((x) => x.id === product.id);
  if (exist) {
    setCartItems(
      cartItems.map((x) =>
        x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
      )
    );
  } else {
    setCartItems([...cartItems, { ...product, qty: 1 }]);
  }
};
const onRemove = (product) => {
  const exist = cartItems.find((x) => x.id === product.id);
  if (exist.qty === 1) {
    setCartItems(cartItems.filter((x) => x.id !== product.id));
  } else {
    setCartItems(
      cartItems.map((x) =>
        x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
      )
    );
  }
};
  return (
    <div>
      <Router>
      <Switch>
        
        <Route path='/events' render={()=>
          <Events findProductHandler={findProductHandler} priceHandler={priceHandler} categoryHandler={categoryHandler} onRemove={onRemove} products={pProducts} onAdd={onAdd} />
         } />
        <Route path='/annual'component={AnnualReport} />
        <Route path='/team' render={()=>
          <Teams saleimg='cover4.png' />
         } />
        <Route path='/blogs' component={Catalogue} />
        <Route path='/sign-up' component={SignUp}  />
        <Route path='/index' render={()=>
          <Cart onRemove={onRemove} onAdd={onAdd} cartItems={cartItems} setCartItems={setCartItems} products={products} />
         } />
         <Route path='/' render={()=>
          <About title='My title' body='This is a card which gives information about product.' onRemove={onRemove} onAdd={onAdd} cartItems={cartItems} setCartItems={setCartItems} products={products} bannerimg='mastercard.jpg' bannerimg2='visa.jpg' bannerimg3='banner3.jpg' imageURL='logo.PNG'coverimgURL='cover2.jpg' boyimg='boychild.jpg' girlimg='girlchild.jpg' menimg='bigboy.jpg' womanimg='biggirl.jpg'/>
         } />
         
      </Switch>
      </Router>
    </div>
  );
}

export default App;
