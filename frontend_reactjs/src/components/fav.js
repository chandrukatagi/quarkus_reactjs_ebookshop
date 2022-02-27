import React, { useState, useEffect } from "react";
import "../styles/cart.css";
import Button from '@mui/material/Button';

const Fav = ({handleClick,favlist, setFavList }) => {

  const handleRemove = (id) => {
    const arr = favlist.filter((item) => item.id !== id);
    setFavList(arr);
    
  };

  
  return (
    <article>
      {favlist.map((item) => (
        <div className="cart_box" key={item.id}>
          <div className="cart_img">
            <img src={item.img} alt="" />
            <p>{item.title}</p>
            <span>Price: {item.price}</span>
          </div>
          <div>
            <Button onClick={() => handleClick(item)}>Add to Cart</Button>
          
         
            
            <Button onClick={() => handleRemove(item.id)}>Remove From Fav</Button>
          </div>
        </div>
      ))}
    </article>
  );
};

export default Fav;
