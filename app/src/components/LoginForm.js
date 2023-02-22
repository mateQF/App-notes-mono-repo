import React from 'react'
import { useField } from '../hooks/useField'
import { Button, Form } from 'react-bootstrap'

export default function LoginForm ({ handleSubmit }) {
  const username = useField({ type: 'text' })
  const password = useField({ type: 'password' })

  return (
    <Form onSubmit={handleSubmit} data-test-id='login-form'>
      <Form.Group id='username'>
        <Form.Control
          {...username}
          name='Username'
          placeholder='Username'
        />
      </Form.Group>
      <Form.Group id='password'>
        <Form.Control
          {...password}
          name='Password'
          placeholder='Password'
        />
      </Form.Group>
      <Button id='form-login-button' type='submit'>Login</Button>
    </Form>
  )
}
