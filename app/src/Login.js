import React, { useState } from 'react'
import LoginForm from './components/LoginForm'
import { useNavigate } from 'react-router-dom'
import { useUser } from './hooks/useUser'
import { login as loginService } from './services/login'
import { setToken } from './services/notes'

export default function Login () {
  const { user, setUser } = useUser()

  const navigate = useNavigate()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleLogin = async (e) => {
    e.preventDefault()

    try {
      const user = await loginService({
        username,
        password
      })
      window.localStorage.setItem('loggedNoteAppUser', JSON.stringify(user))
      setToken(user.token)

      setUser(user)
      setUsername('')
      setPassword('')
      navigate('/notes')
    } catch (err) {
      setError('Wrong credentials')
      setTimeout(() => {
        setError('')
      }, 5000)
    }
  }

  if (error) {
    return <p>{error}</p>
  }

  if (user) {
    return <p>User logged</p>
  }

  return (
    <LoginForm
      username={username}
      password={password}
      handleUsernameChange={
        ({ target }) => setUsername(target.value)
      }
      handlePasswordChange={
        ({ target }) => setPassword(target.value)
      }
      handleSubmit={handleLogin}
    />
  )
}
