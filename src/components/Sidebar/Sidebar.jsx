import React from 'react'
import './Sidebar.css'
import {FiHeart} from 'react-icons/fi'
import {RxHome} from 'react-icons/rx'
import {FiBookmark} from 'react-icons/fi'
import {CgProfile} from 'react-icons/cg'
import {FiSettings} from 'react-icons/fi'
import {MdOutlineNotificationsNone} from 'react-icons/md'
const Sidebar = () => {
  return (
    <section className='container'>
        <div className="sidebar">
            <div className="img-container">
                <img src="./background5.jpg" alt="" />
            </div>
            <p>Esmael Mohammed</p>
            <br /><br />
            <div className="sidebar-menus">
                <div className="menu-container">
                    <h1><RxHome/></h1>
                    <h3>Home</h3>
                </div>
                <div className="menu-container">
                    <h1><MdOutlineNotificationsNone/></h1>
                    <h3>Notifications</h3>
                </div>
                <div className="menu-container">
                    <h1><FiBookmark/></h1>
                    <h3>Bookmarks</h3>
                </div>
                <div className="menu-container">
                    <h1><FiHeart/></h1>
                    <h3>Liked</h3>
                </div>
                <div className="menu-container">
                    <h1><CgProfile/></h1>
                    <h3>My Profie</h3>
                </div>
                <div className="menu-container">
                    <h1><FiSettings/></h1>
                    <h3>Settings</h3>
                </div>
                
            </div>
        </div>
    </section>
  )
}

export default Sidebar