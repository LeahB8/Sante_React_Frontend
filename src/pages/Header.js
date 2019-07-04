import React from 'react'

import { Link } from 'react-router-dom'
import Button from '@material-ui/core/Button'
import Logo from "../Logo.png";


 
const Header = props =>
  <header className='App-header'>

  <nav className="navbar navbar-default navbar-fixed-top">
			<div className="container">
          
                        <Link className="Homepage-link" to='/' >Home Page</Link> 
                        <Link className="Homepage-link" to='/signin' >Log In</Link>
                        <Link className="Homepage-link" to='/signup' >SignUp</Link>
                        
                        <img src={Logo} className="App-logo" alt="logo" />
                        <br></br>
			</div>
            <h1>Santé</h1>

		</nav>

    <h1 className='App-title'>
      {
        props.username
        ? `Welcome back, ${props.username}!`
        : 'Welcome!'
      }
      <br/>
      {
       props.username && 
         
          <Button onClick={props.signout} variant='contained' color='secondary'>
             SIGN OUT   
          </Button>
      }
    </h1>
  </header>

//------------------------------------------------------------------------------------------------------------------
// EXPORT
//------------------------------------------------------------------------------------------------------------------
 
export default Header