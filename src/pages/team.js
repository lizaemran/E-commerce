import React from 'react'
import NavBar from '../components/navbar';
import Footer from '../components/Footer';
import Card from '../components/card'
const team = ({saleimg}) => {
    return (
      <div>
      <NavBar />
      <div class="container-fluid" class="main-container" >
        <img src={saleimg} alt="coverpic" id="saleCover" class="cover_pic" />    
        </div>
        <div className="pc-block-title"> 
        <h2 className="pc-title"></h2>
        <h4 id="heading"> Welcome to our Store</h4>
        <div className="pc-description">
            <h6>View Our Products</h6>
        </div>
        </div>
        <div className="divider">
        <div class="hr-theme-slash-2">
         <div class="hr-line"></div>
            <div class="hr-icon"><i class="material-icons"></i>❤</div>
            <div class="hr-line"></div>
        </div>
        </div>
      
    </div>
    )
}

export default team
