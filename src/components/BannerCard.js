import React from 'react'

const BannerCard = () => {
    return (
        <div>
            <div className="row d-flex justify-content-center align-items-center text-center "  >
        
        <div className="col ban"  >
          <img style={{width:"100%",height:"auto"}}src="bigboy.jpg" alt="men" />
        </div>
        <div className="col ">
          <h1>Summers Collection</h1>
          <p>Our Summers Collectoion - Available now in Stores.</p>
        </div>
      </div>
      <div className="row d-flex justify-content-center align-items-center text-center"  >
      <div className="col ">
          <h1>Summers Collection</h1>
          <p>Our Spring Collectoion - Available now in Stores.</p>
        </div>
        <div className="col ban" >
          <img style={{width:"100%",height:"auto"}}src="girlchild.jpg" alt="men" />
        </div>
        
      </div><div className="row d-flex justify-content-center align-items-center text-center"  >
        
        <div className="col ban" >
          <img style={{width:"100%",height:"auto"}}src="boychild.jpg" alt="men" />
        </div>
        <div className="col ">
          <h1>Mid Summers Collection</h1>
          <p>Our Mid Summers Collectoion - Available now in Stores.</p>
        </div>
      </div>
        </div>
    )
}

export default BannerCard
