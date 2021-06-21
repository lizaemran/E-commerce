import React, {useState, useEffect} from 'react'

const Basket = ({cartItems, setCartItems, onAdd, onRemove}) => {
  const [itemssPrice, setItemssPrice] = useState();
  useEffect(() => {
    try {
      setItemssPrice(cartItems.reduce((a, c) => a + c.qty * c.price, 0));
    }
    catch(e){
      console.log("error reduce");
    }
  })
  const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0);
  const taxPrice = itemsPrice * 0.14;
  const shippingPrice = itemsPrice > 2000 ? 0 : 20;
  const totalPrice = itemsPrice + taxPrice + shippingPrice;
    return (
        <aside style={{paddingLeft: "70px", paddingRight: "70px" }} className="col-12">
            <h2 style={{fontSize: "32px",
                  lineHeight: "43px",
                  fontWeight: "500",
                  padding:"0",
                  color: "#333333",
                  marginLeft: "70px",
                  textAlign:"center"}}>Cart Items</h2>
            <div  style={{backgroundColor: "#f3f3ed"}}>
                {cartItems.length === 0 && <div >No items in Cart</div>}
                {cartItems.map((item) => (
          <div key={item.id} className="row">
            <div className="col-2">{item.name}</div>
            <div className="col-2">
              <button onClick={() => onRemove(item)} className="remove">
                -
              </button>{' '}
              <button onClick={() => onAdd(item)} className="add">
                +
              </button>
            </div>

            <div className="col-2 text-right">
              {item.qty} x ${item.price.toFixed(2)}
            </div>
          </div>
        ))}
           {cartItems.length !== 0 && (
          <>
            <hr></hr>
            <div className="row">
              <div className="col-2">Items Price</div>
              <div className="col-1 text-right">${itemsPrice.toFixed(2)}</div>
            </div>
            <div className="row">
              <div className="col-2">Tax Price</div>
              <div className="col-1 text-right">${taxPrice.toFixed(2)}</div>
            </div>
            <div className="row">
              <div className="col-2">Shipping Price</div>
              <div className="col-1 text-right">
                ${shippingPrice.toFixed(2)}
              </div>
            </div>

            <div className="row">
              <div className="col-2">
                <strong>Total Price</strong>
              </div>
              <div className="col-1 text-right">
                <strong>${totalPrice.toFixed(2)}</strong>
              </div>
            </div>
            <hr />
            <div className="row">
              <button onClick={() => alert('Implement Checkout!')}>
                Checkout
              </button>
            </div>
          </>
        )}
            </div>
        </aside>
    )
}

export default Basket
