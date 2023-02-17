import React, { useState } from 'react'

const Home = () => <h1>Home</h1>

const Notes = () => <h1>Notes</h1>

const Users = () => <h1>Users</h1>

const inlineStyles = {
  padding: 8
}
const App = () => {
  const [page, setPage] = useState(() => {
    const { pathname } = window.location
    const page = pathname.slice(1)
    return page
  })

  const getContent = () => {
    if (page === 'notes') {
      return <Notes />
    } else if (page === 'users') {
      return <Users />
    } else {
      return <Home />
    }
  }

  const toPage = page => e => {
    e.preventDefault()
    window.history.pushState(null, '', `/${page}`)
    setPage(page)
  }
  return (
    <div>
      <header>
        <a href='#' onClick={toPage('home')} style={inlineStyles}>Home</a>
        <a href='#' onClick={toPage('notes')} style={inlineStyles}>Notes</a>
        <a href='#' onClick={toPage('users')} style={inlineStyles}>Users</a>
      </header>
      {getContent()}
    </div>
  )
}

export default App
