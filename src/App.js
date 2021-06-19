import React, { useState } from 'react';
import './styles/app.scss';
import data from './data';
import NavBar from './components/navbar';
import { library } from '@fortawesome/fontawesome-svg-core';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages';
import About from './pages/about';
import Events from './pages/event';
import AnnualReport from './pages/annual';
import Teams from './pages/team';
import Blogs from './pages/blog';
import SignUp from './pages/signup';


function App() {
  const [bill, setBill] = useState({
    item: 0,
    price: 0,
  })
 
  return (
    <div>
      
      <Router>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/about' render={()=>
          <About title='My title' body='This is a card which gives information about product.' bannerimg='mastercard.jpg' bannerimg2='visa.jpg' bannerimg3='banner3.jpg' imageURL='logo.PNG'coverimgURL='cover2.jpg' boyimg='boychild.jpg' girlimg='girlchild.jpg' menimg='bigboy.jpg' womanimg='biggirl.jpg'/>
         } />
         
        <Route path='/events' render={()=>
          <Events title='My title' body='This is a card which gives information about product.' imageURL='logo.PNG'/>
         } />
        <Route path='/annual'render={()=>
          <AnnualReport title='My title' body='This is a card which gives information about product.' imageURL='logo.PNG'/>
         } />
        <Route path='/team' render={()=>
          <Teams saleimg='cover4.png' title='My title' body='This is a card which gives information about product.' imageURL='logo.PNG'/>
         } />
        <Route path='/blogs' component={Blogs} />
        <Route path='/sign-up' component={SignUp} />
      </Switch>
      </Router>
    </div>
  );
}

export default App;
