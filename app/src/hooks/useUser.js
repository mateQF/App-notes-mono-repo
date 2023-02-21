import { useEffect, useState } from 'react'
import { setToken } from '../services/notes'
import { login as loginService } from '../services/login'

export const useUser = () => {
  const [user, setUser] = useState(null)

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedNoteAppUser')
    const user = JSON.parse(loggedUserJSON)
    setUser(user)
    if (user) {
      setToken(user.token)
    }
  }, [])

  const login = async ({ username, password }) => {
    const user = await loginService({
      username,
      password
    })

    window.localStorage.setItem('loggedNoteAppUser', JSON.stringify(user))
    setToken(user.token)

    setUser(user)
  }

  const logout = () => {
    setUser(null)
    setToken(user.token)
    window.localStorage.removeItem('loggedNoteAppUser')
  }

  return { user, setUser, login, logout }
}
