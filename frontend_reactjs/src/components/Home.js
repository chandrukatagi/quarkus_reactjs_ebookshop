import React, { useState, useEffect } from "react";
import Book from "./book";
import Navbar from "./navbar";
import Cart from "./cart";
import axios from 'axios';
import { createBrowserHistory } from 'history';

const history = createBrowserHistory();

const Home = () => {
  const [show, setShow] = useState(true);
  const [cart, setCart] = useState([]);
  const [luser, setUser] = useState(false);
  
  const handleClick = (item) => {
    if (cart.indexOf(item) !== -1) return;
    setCart([...cart, item]);
  };
  const logoutHandler = (event) => {
    console.log("Logout");
    setShow(true);
		localStorage.removeItem('AuthToken');
		history.push('/login');
    window.location.reload();
	};

  const handleChange = (item, d) => {
    const ind = cart.indexOf(item);
    const arr = cart;
    arr[ind].amount += d;

    if (arr[ind].amount === 0) arr[ind].amount = 1;
    setCart([...arr]);
  };

  const authToken = localStorage.getItem('AuthToken');
  console.log(authToken);
  axios.defaults.headers.common = { Authorization: `${authToken}` };
  axios
    .get('/secured/claim')
    .then((response) => {
      console.log(response);
      if(response.data != ''){
      setUser(true);
      }
      else{
        setUser(false);
        history.push('/login');
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


  // useEffect(() => {
  //   console.log("cart change");
  // }, [cart]);

  return (
    <React.Fragment>
      <Navbar setShow={setShow} size={cart.length} luser={luser} logoutHandler={logoutHandler} />
      {show ? (
        <Book cart={cart} setCart={setCart} handleClick={handleClick} />
      ) : (
        <Cart cart={cart} setCart={setCart} handleChange={handleChange} />
      )}
    </React.Fragment>
    
  );
};

export default Home;
