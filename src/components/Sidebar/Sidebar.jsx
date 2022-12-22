import React from 'react'
import './Sidebar.css'
import {FiHeart} from 'react-icons/fi'
import {RxHome} from 'react-icons/rx'
const Sidebar = () => {
  return (
    <section className='container'>
        <div className="sidebar">
            <div className="img-container">
                <img src="./background5.jpg" alt="" />
            </div>
            <h1>Esmael Mohammed</h1>
            <br /><br /><br />
            <div className="sidebar-menus">
                <div className="menu-container">
                    <h1><RxHome/></h1>
                    <h3>Home</h3>
                </div>
                <div className="menu-container">
                    <h1><FiHeart/></h1>
                    <h3>Liked</h3>
                </div>
                <div className="menu-container">
                    <h1><FiHeart/></h1>
                    <h3>Liked</h3>
                </div>
                <div className="menu-container">
                    <h1><FiHeart/></h1>
                    <h3>Liked</h3>
                </div>
                <div className="menu-container">
                    <h1><FiHeart/></h1>
                    <h3>Liked</h3>
                </div>
                
            </div>
        </div>
    </section>
  )
}

export default Sidebar