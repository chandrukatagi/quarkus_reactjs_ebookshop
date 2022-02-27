import React, { useState, useEffect } from "react";
import "../styles/cart.css";
import Button from '@mui/material/Button';

const Cart = ({ cart,setFavShow, setShow, setCart, handleChange }) => {
  const [price, setPrice] = useState(0);
  const style1={    width: "max-content",
    float: "right",};
    const style2={    padding: 10,
    float: "right",
  backgroundColor:"blue",
  color:"white",
};
const handlePlaceOrder = () => {
setCart([]);
setShow(true);
setFavShow(false);
}
  const handleRemove = (id) => {
    const arr = cart.filter((item) => item.id !== id);
    setCart(arr);
    handlePrice();
  };

  const handlePrice = () => {
    let ans = 0;
    cart.map((item) => (ans += item.amount * item.price));
    setPrice(ans);
  };

  useEffect(() => {
    handlePrice();
  });

  return (
    <article>
      {cart.map((item) => (
        <div className="cart_box" key={item.id}>
          <div className="cart_img">
            <img src={item.img} alt="" />
            <p>{item.title}</p>
          </div>
          <div>
            <Button onClick={() => handleChange(item, 1)}>+</Button>
            <Button>{item.amount}</Button>
            <Button onClick={() => handleChange(item, -1)}>-</Button>
          </div>
          <div>
            <span>{item.price}</span>
            <button onClick={() => handleRemove(item.id)}>Remove</button>
          </div>
        </div>
      ))}
      <div className="total">
        <span>Total Price of your Cart</span>
        <span>Rs - {price}</span>
        
      </div>
      <div style={style1}>
        <div>
      <span>Shipping Address:</span>
      </div>
      <div>
        <textarea></textarea>
        </div>
        <Button style={style2} onClick={() => handlePlaceOrder()}>Place Order</Button>
      </div>

    </article>
  );
};

export default Cart;
