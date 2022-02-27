import React, { useState } from "react";
import Cards from "./card";
import "../styles/book.css";
import axios from 'axios';
import { createBrowserHistory } from 'history';
const history = createBrowserHistory();
const Book = ({ cart, setCart, favlist, setFavList,  handleClick }) => {
  const authToken = localStorage.getItem('AuthToken');
  console.log(authToken);
  const [blist, setBookList] = useState([]);
  axios.defaults.headers.common = { Authorization: `${authToken}` };
  axios
    .get('/products/list')
    .then((response) => {
      console.log(response);
      if(response.data != ''){
      setBookList(response.data);
      }
      else{
        setBookList([]);
        
      }
    })
    .catch((error) => {
    /*	if (error.response.status === 403) {
        //this.props.history.push('/login');
      }*/
      console.log(error);
      this.setState({ errorMsg: 'Error in retrieving the data' });
      history.push('/login');
    });

  return (
    <section>
      {blist.map((item) => (
        <Cards key={item.id} item={item} favlist={favlist} setFavList={setFavList} cart={cart} setCart={setCart} handleClick={handleClick} />
      ))}
    </section>
  );
};

export default Book;
