import React from 'react'

const Header = ({countCartItems}) => {
    return (
      <header style={{paddingLeft: "70px", paddingRight: "70px"}}className="row block center">
        <hr />
         <div className="px-4 d-flex justify-content-between align-items-center">
          <div >
              <a href="#/">
                  <h1 style={{fontSize: "32px",
                  lineHeight: "43px",
                  fontWeight: "500",
                  padding:"0",
                  color: "#333333",
                  marginLeft: "-10px"}}>Cart Details</h1>
              </a>
          </div>
          <div id="cartdiv"  style={{height:"fit-content"}}>
              <a style={{fontSize: "16px",
                  lineHeight: "43px",
                  fontWeight: "500",
                  padding:"0",
                  color: "#333333"}} href="#/cart">
          Cart{' '}
          {countCartItems ? (
            <button className="badge">{countCartItems}</button>
          ) : (
            ''
          )}   
        </a>{' '}  <a style={{fontSize: "16px",
                  lineHeight: "43px",
                  fontWeight: "500",
                  padding:"0",
                  color: "#333333"}} href="#/sign in">    Sign In</a>
                  
          </div>
          
          </div>
          <hr />
      </header>
    )
}

export default Header
