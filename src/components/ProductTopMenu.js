import React, {useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faArrowCircleDown, faSearch, faArrowCircleUp} from "@fortawesome/free-solid-svg-icons"

const ProductTopMenu = ({priceHandler, findProductHandler}) => {
    const [title, setTitle] = useState('');
    const asc = () => {
        priceHandler("asc");
    }
    const dec = () => {
        priceHandler("dec");
    }
    const getValue = (event) => {
         return setTitle(event.target.value);
    }
    const findItem = (event) => {
        getValue(event);
        findProductHandler(title);
    }
    return (
        <div style={{display:"flex", paddingRight:"30px" }}>
                <div>
                <input onBlur={findItem} onChange={findItem} type="text" placeholder="Search..." id="myInput"  />
                <button onClick={findItem} id="searchBtn" className="button-top"><FontAwesomeIcon icon={faSearch}/> </button>
                </div>
                <div style={{marginBottom:"-20px"}}>
                    <a href="#" onClick={asc}  id="bttnL"><FontAwesomeIcon icon={faArrowCircleUp}/></a>
                    <a href="#" onClick={dec}  id="bttnL"><FontAwesomeIcon icon={faArrowCircleDown}/></a>
                </div>
        </div>
    )
}

export default ProductTopMenu
