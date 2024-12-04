import React from 'react'
import { UserProvider } from './context/UserContext'
import Profile from './Components/Profile'
import Singlepage from './Components/Singlepage'

function App1  ()  {
  return (
    <UserProvider>
    <Profile/>
    <Singlepage />

  </UserProvider>
  )
}

export default App1