import React from 'react'
import { Toggleable } from './Toggleable'
import { useField } from '../hooks/useField'

export default function LoginForm ({
  handleSubmit
}) {
  const username = useField({ type: 'text' })
  const password = useField({ type: 'password' })

  return (
    <Toggleable buttonLabel='Go login!'>
      <div>
        <form onSubmit={handleSubmit} data-test-id='login-form'>
          <div>
            <input
              {...username}
              name='Username'
              placeholder='Username'
            />
          </div>
          <div>
            <input
              {...password}
              name='Password'
              placeholder='Password'
            />
          </div>
          <button id='form-login-button'>Login</button>
        </form>
      </div>
    </Toggleable>
  )
}
