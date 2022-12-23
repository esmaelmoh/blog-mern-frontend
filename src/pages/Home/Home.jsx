import React from 'react'
import Sidebar from '../../components/Sidebar/Sidebar'
import Sidebar2 from '../../components/Sidebar2/Sidebar2'
import Posts from '../Posts/Posts'
import './Home.css'
const Home = () => {
  return (
    <div className='home-container'>

        <Sidebar/>
        <Posts/>
        <Sidebar2/>
    </div>
  )
}

export default Home