import React from "react";
import "../styles/navbar.css";
import { AiOutlineShoppingCart } from "react-icons/fa";
import Login from '../components/Login';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { Button } from "@mui/material";
import Link from '@material-ui/core/Link';
import { createBrowserHistory } from 'history';

const history = createBrowserHistory();
const btnstyle = { padding: 10, marginLeft: 30, backgroundColor: "blue", color:"white" }
const Navbar = ({ setShow, size, luser, logoutHandler }) => {
  
  return (
    <nav>
      <div className="nav_box">
        <span className="my_shop" onClick={() => setShow(true)}>
         Shopping App
        </span>
        <div className="cart" onClick={() => setShow(false)}>
          <span>
            <AddShoppingCartIcon/>
          </span>
          <span>{size}</span>
          <span>
         
          </span>
           </div>
           { luser?
          <Button onClick={logoutHandler} style={btnstyle}>
									{"Logout"}
								</Button>:<Link href="login" variant="body2">
									{"Login"}
								</Link>  }
      </div>
    </nav>
  );
};

export default Navbar;

// import * as React from 'react';
// import AppBar from '@mui/material/AppBar';
// import "../styles/navbar.css";
// import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
// import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';
// import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
// import { Link } from 'react-router-dom';
// import Login from './Login';

// export default function ButtonAppBar() {
 
//   return (
//     <Box sx={{ flexGrow: 1 }}>
//       <AppBar position="static">
//         <Toolbar>
//           <IconButton
//             size="large"
//             edge="start"
//             color="inherit"
//             aria-label="menu"
//             sx={{ mr: 2 }}
//           >
//             <MenuIcon />
//           </IconButton>
//           <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
//             Shopping App
//           </Typography>
//           <Button color="inherit">< AddShoppingCartIcon /></Button>
           
// <Link to={'/Login'}>
//   <Button color="inherit">Login</Button>
// </Link> 
            
            
//         </Toolbar>
//       </AppBar>
//     </Box>
//   );
// }






