import React, { useState, useEffect } from 'react'
import { Form, Button, Container, Row, Col } from 'react-bootstrap'
import './LoginPage.css'
let axios = require('axios').default

export default function Login(props) {
  const [state, dispatch] = useStoreContext();
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  let [inputValid, setInputValid] = useState(true)
  let [inputValidMessage, setInputValidMessage] = useState(null)



  function validateForm() {
    return (
      email.length > 0 && password.length > 0 && password.length < 16 && email.includes('@')
    )
  }

  async function handleSubmit(event) {
    event.preventDefault()
    let response
    try {
      response = await axios('/api/users/login', {
        method: 'post',
        data: {
          email: email,
          password: password
        }
      })
      console.log(response)
    } catch (err) {
      console.error(err)
      setInputValid(false)
      //setInputValidMessage(err)
    }
    if (typeof response == 'undefined') return console.log('no response received')
    if (!response.status == 200) return setInputValid(false)
    
    
    //loginComplete = () => props.updateAuthToken('')
    dispatch({
      type: 'CURRENT_USER',
      user: {
        ...response.data.user,
        loggedIn: true,
        authToken: response.data.token
      }
    })
    setTimeout(() => props.updateAuthToken(''), 1000)
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