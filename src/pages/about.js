import React from 'react'

const about = ({imageURL, boyimg, girlimg, menimg, womanimg}) => {
    return (
        <div className="main">
        <div class="container-fluid" class="main-container" >
        <img src={imageURL} alt="coverpic" class="cover_pic" />    
        </div>
        <div className="pc-block-title"> 
        <h2 className="pc-title"></h2>
        <h4>Popular Collections</h4>
        <div className="pc-description">
            <h6>Visit our outlet to view amazing collection.</h6>
        </div>
        </div>
        <div class="pt-layout-promo-box layout-inner-large"></div>
        <div class="row pt-layout-promo-box">
        <div class="col-sm-12 col-md-6">
            <img src={womanimg} alt="girl" />
        </div>
        <div class="col-sm-12 col-md-6">
            <div class="row">
                <div class="col-sm-6">
                    <img src={girlimg} alt="kid girl" />
                </div>
                <div class="col-sm-6">
                    <img src={boyimg} alt="kid boy" />
                </div>
                <div class="col-sm-12">
                    <img src={menimg} alt="boy" />
                </div>
            </div>
        </div>
        </div>
        </div>
    )
}

export default about
