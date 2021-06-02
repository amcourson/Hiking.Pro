import React, { useState } from 'react'
import { Form, Button, Container, Row, Col } from 'react-bootstrap'
import './LoginPage.css'
let axios = require('axios').default

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  let [inputValid, setInputValid] = useState(true)

  function validateForm() {
    return (
      email.length > 0 && password.length > 0 && password.length < 16 && email.includes('@')
    )
  }

  async function handleSubmit(event) {
    event.preventDefault()
    console.log('submi')
    // post; if not good setInputValid(false); if good redirect
    let response
    try {
      response = await axios('/api/login', {
        method: 'post',
        data: {
          email: email,
          password: password
        }
      })
    } catch (err) {
      console.log(err)
      console.log('bad')
      return
    }
    if (!response.status == 200) {
      console.log('gpp')
      setInputValid(false)
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
                      <p className='text-danger'>Input invalid. Please try again.</p>
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