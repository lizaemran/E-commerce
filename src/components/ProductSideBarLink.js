import React, {useState} from 'react'


const ProductSideBarLink = ({link, name, isactive, onClick}) => {
   
    return (
        <div>
            <li class="nav-item mt-2" >
        <a href="#" onClick={onClick} className={`nav-link ${isactive}`} aria-current="page" style={{color:"#e02828", borderRadius: "60px"}}>
     
          {name}
        </a>
      </li>
     
        </div>
    )
}

export default ProductSideBarLink
