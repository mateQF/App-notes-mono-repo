import React from 'react'

import { Toggleable } from './Toggleable'
export default function LoginForm ({
  handleSubmit,
  handlePasswordChange,
  handleUsernameChange,
  username,
  password
}) {
  return (
    <Toggleable buttonLabel='Go login!'>
      <div>
        <form onSubmit={handleSubmit} data-test-id='login-form'>
          <div>
            <input
              type='text'
              value={username}
              name='Username'
              placeholder='Username'
              onChange={handleUsernameChange}
            />
          </div>
          <div>
            <input
              type='password'
              value={password}
              name='Password'
              placeholder='Password'
              onChange={handlePasswordChange}
            />
          </div>
          <button id='form-login-button'>Login</button>
        </form>
      </div>
    </Toggleable>
  )
}
