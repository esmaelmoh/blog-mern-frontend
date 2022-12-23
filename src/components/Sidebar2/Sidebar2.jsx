import React from 'react'
import './Sidebar2.css'
import {FiHeart} from 'react-icons/fi'
import {RxHome} from 'react-icons/rx'
import {FiBookmark} from 'react-icons/fi'
import {CgProfile} from 'react-icons/cg'
import {FiSettings} from 'react-icons/fi'
import {MdOutlineNotificationsNone} from 'react-icons/md'
import Following from '../Following/Following'
const Sidebar2 = () => {
  return (
    <section className='container'>
        <div className="sidebar2">
           <br />
           <br />
           <br />
            <div className="sidebar2-menus">
                <div className="menu-container">
                    <h1>Followers</h1>
                    <h3>Following</h3>
                </div>   
                <Following/><br />             
                <Following/> <br />            
                <Following/> <br />            
                <Following/> <br />            
                <Following/>  <br />           
                <Following/><br />             
            </div>
        </div>
    </section>
  )
}

export default Sidebar2