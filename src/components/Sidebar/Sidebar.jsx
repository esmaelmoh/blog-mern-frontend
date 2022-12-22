import React from 'react'
import './Sidebar.css'
const Sidebar = () => {
  return (
    <section className='container'>
        <div className="sidebar">
            <div className="img-container">
                <img src="./background5.jpg" alt="" />
            </div>
            <h1>Esmael Mohammed</h1>
            <div className="sidebar-menus">
                <div className="menu-container">
                    <h1>2</h1>
                    <h3>Notification</h3>
                </div>
                <div className="menu-container">
                    <h1>2</h1>
                    <h3>Notification</h3>
                </div>
                <div className="menu-container">
                    <h1>2</h1>
                    <h3>Notification</h3>
                </div>
                <div className="menu-container">
                    <h1>2</h1>
                    <h3>Notification</h3>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Sidebar