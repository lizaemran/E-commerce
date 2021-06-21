import React from 'react';
import Card from '../components/card'
import TopPanel from '../components/TopPanel';
import NavBar from '../components/navbar';
import Footer from '../components/Footer';
import Newsletter from '../components/Newsletter';
import Main from '../components/Main';
const about = ({onRemove, onAdd, products, coverimgURL, boyimg, girlimg,  bannerimg, bannerimg2, banner3}) => {
    return (
        <div className="main">
        <TopPanel bannerimg={bannerimg} bannerimg2={bannerimg2} banner3={banner3}/>
        <div className="pg-block-title"> 
        <h4 className="pg-title">Email Us: <strong>support@soyoung.co</strong></h4>
        </div>
        <div class="hr-theme-slash-2">
         <div class="hr-line"></div>
            <div class="hr-icon"><i class="material-icons"></i>❤</div>
            <div class="hr-line"></div>
        </div>
        <NavBar />
        <div class="container-fluid" class="main-container" >
        <img src={coverimgURL} alt="coverpic" class="cover_pic" />    
        </div>
        <div className="pc-block-title"> 
        <h2 className="pc-title"></h2>
        <h4 id="heading">Popular Collections</h4>
        <div className="pc-description">
            <h6>Visit our outlet to view amazing collection.</h6>
        </div>
        </div>
       <React.Fragment>
      
       <div id="content">
                    
            
                    <img src={boyimg} class="images" alt="boyimg" />
              
                     <img src={girlimg} class="images" alt="girlpic" />
                     <img src={boyimg} class="images" alt="boyimg" />
                  
        </div>
       </React.Fragment>
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
        <Main products={products} onAdd={onAdd} onRemove={onRemove} />
        <div className="divider" style={{paddingTop: "50px"}}>
        <div class="hr-theme-slash-2">
         <div class="hr-line"></div>
            <div class="hr-icon"><i class="material-icons"></i>❤</div>
            <div class="hr-line"></div>
        </div>
        </div>
     <Newsletter />
     <Footer />
        </div>
    )
}

export default about
