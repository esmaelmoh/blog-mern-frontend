import React from 'react'
import Sidebar from '../../components/Sidebar/Sidebar'
import Posts from '../Posts/Posts'

const Home = () => {
  return (
    <div className='home-container'>
        <Sidebar/>
        <Posts/>
    </div>
  )
}

export default Home