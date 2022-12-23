import React, { useContext } from 'react'
import Sidebar from '../../components/Sidebar/Sidebar'
import Sidebar2 from '../../components/Sidebar2/Sidebar2'
import { Context } from '../../context/context'
import Login from '../Login/Login'
import Posts from '../Posts/Posts'
import Register from '../Register/Register'
import './Home.css'
const Home = () => {
  const {user} = useContext(Context)
  console.log(user?._id)
  console.log(user?.username)
  console.log(user?.password)
  console.log(user?.email)
  console.log()
  return (
    <>
    {user?
    <div className='home-container'>
        <Sidebar/>
        <Posts/>
        <Sidebar2/>
    </div>:<Register/>
    }
    </>
  )
}

export default Home