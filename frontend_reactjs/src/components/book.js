import React, { useState } from "react";
import list from "../data";
import Cards from "./card";
import "../styles/book.css";

const Book = ({ cart, setCart, handleClick }) => {
  return (
    <section>
      {list.map((item) => (
        <Cards key={item.id} item={item} cart={cart} setCart={setCart} handleClick={handleClick} />
      ))}
    </section>
  );
};

export default Book;
