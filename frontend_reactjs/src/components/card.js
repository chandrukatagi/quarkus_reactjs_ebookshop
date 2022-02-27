import React from "react";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Button from '@mui/material/Button';
import { useState, useEffect } from "react";
import FavoriteIcon from '@material-ui/icons/Favorite';
import Favorite from "@material-ui/icons/Favorite";
import IconButton from '@material-ui/core/IconButton';
import Cart from "./cart";



const Cards = ({ item,cart, setCart, handleClick }) => {
  const { title, author, price, img } = item;
  const [fav, setFav] = useState(false);

  const handleAddtoCart = (item) => {
    if (cart.indexOf(item) !== -1) return;
    setCart([...cart, item]);
  };

  return (
    <div className="cards">
      <div className="image_box">
        <img src={img} alt="" />
      </div>
      <div className="details">
        <p>{title}</p>
        <p>{author}</p>
        <p>Price - {price}Rs</p>
        <Button onClick={() => handleAddtoCart(item)}>Add to Cart</Button>
        {/* <Button size='small'><FavoriteBorderIcon /></Button> */}
        {fav &&
          <IconButton onClick={() => { setFav(!fav) }} aria-label="delete" color="primary">
            <FavoriteBorderIcon></FavoriteBorderIcon>
          </IconButton>
        }
        {!fav &&
          <IconButton onClick={() => { setFav(!fav) }} aria-label="delete" color="primary">
            <Favorite></Favorite>
          </IconButton>
        }
      </div>
    </div>
  );
};

export default Cards;

