import React from 'react'

const TopPanel = ({bannerimg, bannerimg2}) => {
    return (
        <div className="pt-top-panel" id="banner-back">
        <div className="container-fluid">
        <div className="pt-row">
            <div className="pt-description">
                <b id="banner">
                FREE SHIPPING ON ALL ORDERS ABOVE PKR 2000 | CASH ON DELIVERY / <img id="ban1" src={bannerimg} alt="master" /> <img id="ban2" src={bannerimg2} alt="visa" />
                </b>
            </div>
        
        </div>
    </div>
    </div>
    )
}

export default TopPanel
