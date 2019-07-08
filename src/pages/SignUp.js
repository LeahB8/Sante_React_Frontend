import React, { Component } from 'react'

// import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

// import { signin } from '../services/api'
// import { Link } from 'react-router-dom'
import { createUser } from '../services/api'
import '../App.css'

 
export default class SignUpForm extends Component {

  state = {
    username: '',
    password: ''
  }

  handleSubmit = event => {
  event.preventDefault()
  createUser(event.target.username.value, event.target.password.value)
    .then(alert("User added"))
  this.props.history.push('/signin')
  }

  render () {
    // const { username, password } = this.state
    const { handleSubmit } = this

    return (
      <div className="sign-in-up-form" >
        <h3>Sign Up:</h3> <br/>
        <hr/>
        <p>Please enter a Username:</p>

        <form onSubmit={handleSubmit}>
        <input
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
