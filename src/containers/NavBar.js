import React from "react";
import ReactDOM from "react-dom";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import AccountCircle from "@material-ui/icons/AccountCircle";
import Switch from "@material-ui/core/Switch";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormGroup from "@material-ui/core/FormGroup";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import SignInForm from "../pages/LogIn";
import SignUpForm from "../pages/SignUp";
import WelcomePage from "../pages/WelcomePage";
import UserProfile from "../pages/UserProfile";
import "../App.css";
import Logo from "../Logo.png";



const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  }
}));

export default function NavBar(props) {
  const classes = useStyles();
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

const sessionHeader = () => {
    return props.loggedIn ? 
      ( <div>
        <Link onClick={props.signout} className="Homepage-link" to="/">
          Sign Out
        </Link>
        </div> )
     : (<div>
        <div className="navbar-link">
         <Link className="Homepage-link" to="/signin">
           Sign In
         </Link>
        </div> 
       <div className="navbar-link">
         <Link className="Homepage-link" to="/signup">
           Sign Up
         </Link>
      </div>  
     </div>
     )
    }


  function handleClose() {
    setAnchorEl(null);
  }

  return (
    <div className={classes.root}>

    <div className="navbar">
      <AppBar className="nav-header" position="static">
        <Toolbar className="toolbar-header">
            <img src={Logo} className="App-logo" alt="logo" />
            <h1 className="navbar-header">Santé</h1>
        
          {auth && (
            <div>
              {/* { props.loggedIn && 
               <IconButton
              aria-label="Account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              color="inherit"
              className="homepage-btn">
                <AccountCircle />
              </IconButton > } */}
                   
              <div className="navbar-link">{sessionHeader()}</div>
 
            </div>
          )}
        </Toolbar>
      </AppBar>
      </div>
    </div>
  );
}
