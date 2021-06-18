import React, { useState, useRef } from 'react';
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

  return (
    <div>
      <Router>
      <NavBar />
      
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/about' render={()=>
          <About imageURL='cover.jpg' boyimg='boychild.jpg' girlimg='girlchild.jpg' menimg='bigboy.jpg' womanimg='biggirl.jpg'/>
         } />
        <Route path='/events' render={()=>
          <Events title='My title' body='This is a card which gives information about product.' imageURL='logo.PNG'/>
         } />
        <Route path='/annual' component={AnnualReport} />
        <Route path='/team' component={Teams} />
        <Route path='/blogs' component={Blogs} />
        <Route path='/sign-up' component={SignUp} />
      </Switch>
      </Router>
    </div>
  );
}

export default App;
