//------------------------------------------------------------------------------------------------------------------
// IMPORTS
//------------------------------------------------------------------------------------------------------------------
 
import React, { Component } from 'react'

// import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

// import { signin } from '../services/api'
// import { Link } from 'react-router-dom'
import { createUser } from '../services/api'

 
export default class SignUpForm extends Component {

// inital state
//------------------------------------------------------------------------------------------------------------------  
  state = {
    username: '',
    password: ''
  }

  handleSubmit = event => {
  event.preventDefault()
  
  alert("User added")
  // let name = event.target.username.value
  // let passord = event.target.password.value

  createUser(event.target.username.value, event.target.password.value)

  this.props.history.push('/signin')



    
  }


// render component
//------------------------------------------------------------------------------------------------------------------
  render () {
    // const { username, password } = this.state
    const { handleSubmit } = this

    return (
      <div className="Inline" >
        <h3>Sign Up:</h3> <br/>
        <hr/>
        <p>Please enter a Username:</p>

        <form onSubmit={handleSubmit}>
        <input
          margin='normal'
          name='username'
        />
        <hr/>
        <br />
        <hr/>
        <p>Please enter a Password:</p>
        <input
          name='password'
          type='password'
        />

        <hr/>
        <br />
        <Button type="submit" variant='contained' color='primary'>
          SUBMIT
        </Button>

        </form>
      
    
      </div>
    )
  }
}
