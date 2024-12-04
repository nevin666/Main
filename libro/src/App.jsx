import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Login from './Components/Login'
import PopularBooks from './Components/PopularBooks'
import Home from './Components/Home'
import Signup from './Components/Signup'
import Allbooks from './Components/Allbooks'
import Addbook from './Components/Addbook'
import Singlepage from './Components/Singlepage'
import Rentbooks from './Components/Rentbooks'
import Profile from './Components/Profile'
import Userdetails from './Components/Userdetails'
import { UserProvider } from './context/UserContext'
import Requests from './Components/Requests'
import Activity from './Components/Activity'






function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   
   <UserProvider>
      <Routes>
      <Route path='/' element={<Home/>}> </Route>
        
        <Route path='/login' element={<Login/>}> </Route>
        <Route path='/signup' element={<Signup/>}> </Route>
        <Route path='/books' element={<Allbooks/>}> </Route>
        <Route path='/add' element={<Addbook/>}> </Route>
     
        <Route path='/single' element={<Singlepage/>}> </Route>
        <Route path='/profile' element={<Profile/>}> </Route>
        <Route path='/rent' element={<Rentbooks/>}> </Route>
      
        <Route path='/userdetails' element={<Userdetails/>}> </Route>
        <Route path='/req' element={<Requests/>}> </Route>
        <Route path='/activity' element={<Activity/>}> </Route>


  






      </Routes>
      </UserProvider>
      </>
      

  )
}

export default App
