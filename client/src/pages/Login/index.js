import React, { useState, useEffect } from 'react'
import { Form, Button, Container } from 'react-bootstrap'
import './LoginPage.css'
import { useStoreContext } from "../../utils/GlobalState";
import { LOGIN } from '../../utils/actions';
import { Link } from "react-router-dom";
let axios = require('axios').default
// import API from "../../utils/API";

export default function Login(props) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  let [inputValid, setInputValid] = useState(true)
  let [inputValidMessage, setInputValidMessage] = useState(null)
  const [state, dispatch] = useStoreContext();



  function validateForm() {
    return (
      email.length > 0 && password.length > 0 && password.length < 16 && email.includes('@')
    )
  }
  // if(state.currentUser.loggedIn) {
  //   props.setAuthToken("")
  // }

  async function handleSubmit(event) {
    event.preventDefault()
   
    try {
     const response = await axios('/api/users/login', {
        method: 'post',
        data: {
          email: email,
          password: password
        }
      })
      console.log("response user ID login page ", response.data)
      if (typeof response == 'undefined') return console.log('no response received')
      if (!response.status == 200) return setInputValid(false)
      dispatch({
        type: LOGIN,
        cred: {
          ...response.data.user,
          loggedIn: true,
          authToken: response.data.token
        }
      })

      console.log("login cred on login page ", state.loginCred)
      props.setLogin(response.data)
      
    } catch (err) {
      console.error(err)
      setInputValid(false)
      //setInputValidMessage(err)
    }
  }

  return (
    <div className='vh-100'>
      <Container className='vh-100 d-flex flex-column justify-content-center'>
        <h1>Log in to your account</h1>
        <div>
          <Form onSubmit={(e) => handleSubmit(e)}>
            <Form.Group size='lg'>
              <Form.Label>Email</Form.Label>
              <Form.Control
                name={'email'}
                type={'email'}
                autoFocus
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>
            <Form.Group size='lg' controlId='password'>
              <Form.Label>Password</Form.Label>
              <Form.Control
                type='password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
            <Button block size='lg' type='submit' disabled={!validateForm()}>
              Login
            </Button>
            <div>
              {(() => {
                if (inputValid) {
                  return
                } else {
                  return (
                    <div>
                      <p className='text-danger'>Input invalid. Please try again.</p><p>{inputValidMessage ? `Server response: ${inputValidMessage}` : ''}</p>
                    </div>
                  )
                }
              })()}
            </div>
          </Form>
        </div>
      </Container>
    </div>
  )
}