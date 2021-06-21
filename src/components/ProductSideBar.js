import React, {useState} from 'react'
import ProductSideBarLink from './ProductSideBarLink';
const ProductSideBar = ({categoryHandler}) => {
    const [isActiveAll, setisActiveAll] = useState(true);
    const [isActiveTops, setisActiveTops] = useState(false);
    const [isActiveBottoms, setisActiveBottoms] = useState(false);
    const [isActiveScarves, setisActiveScarves] = useState(false);
    const [isActiveShoes, setisActiveShoes] = useState(false);
    const [isActiveBags, setisActiveBags] = useState(false);
    const activeHandlerAll= () => {
        setisActiveAll(!isActiveAll);
        setisActiveTops(false);
        setisActiveBottoms(false);
        setisActiveScarves(false);
        setisActiveShoes(false);
        setisActiveBags(false);
        categoryHandler("all");
    }
    const activeHandlerTops= () => {
        setisActiveAll(false);
        setisActiveTops(true);
        setisActiveBottoms(false);
        setisActiveScarves(false);
        setisActiveShoes(false);
        setisActiveBags(false);
        categoryHandler("top");
    }
    const activeHandlerBottoms= () => {
        setisActiveAll(false);
        setisActiveTops(false);
        setisActiveBottoms(true);
        setisActiveScarves(false);
        setisActiveShoes(false);
        setisActiveBags(false);
        categoryHandler("bottom");
    }
    const activeHandlerScarves= () => {
        setisActiveAll(false);
        setisActiveTops(false);
        setisActiveBottoms(false);
        setisActiveScarves(true);
        setisActiveShoes(false);
        setisActiveBags(false);
        categoryHandler("scarf");
    }
    const activeHandlerShoes= () => {
        setisActiveAll(false);
        setisActiveTops(false);
        setisActiveBottoms(false);
        setisActiveScarves(false);
        setisActiveShoes(true);
        setisActiveBags(false);
        categoryHandler("shoes");
    }
    const activeHandlerBags= () => {
        setisActiveTops(false);
        setisActiveBottoms(false);
        setisActiveScarves(false);
        setisActiveShoes(false);
        setisActiveBags(true);
        categoryHandler("bag");
    }
    return (
        <div>
           <div className="d-flex flex-column flex-shrink-0 p-3  " style={{backgroundColor:"white" ,width: "100%", height:"100vh"}}>
    
    <hr />
    <ul class="nav nav-pills flex-column mb-auto">
      <ProductSideBarLink onClick={activeHandlerAll}  link="#" name="All" isactive={isActiveAll? "my-active" : ""}/>
      <ProductSideBarLink onClick={activeHandlerTops}  link="#" name="Tops" isactive={isActiveTops? "my-active" : ""}/>
      <ProductSideBarLink onClick={activeHandlerBottoms}  link="#" name="Bottoms" isactive={isActiveBottoms? "my-active" : ""}/>
      <ProductSideBarLink onClick={activeHandlerScarves}  link="#" name="Scarves" isactive={isActiveScarves? "my-active" : ""}/>
      <ProductSideBarLink onClick={activeHandlerShoes}  link="#" name="Shoes" isactive={isActiveShoes? "my-active" : ""}/>
      <ProductSideBarLink onClick={activeHandlerBags}  link="#" name="Bags" isactive={isActiveBags? "my-active" : ""}/>
    </ul>
    <hr />
    
  </div> 
        </div>
    )
}

export default ProductSideBar
