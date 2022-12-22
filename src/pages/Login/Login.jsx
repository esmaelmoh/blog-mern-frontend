import React from 'react'
import './Login.css'
import {GrGoogle} from 'react-icons/gr'
const Login = () => {
  return (
  <div className='login-container'>
    {/* <div className="login-container-left">
        <img src="./images/icon.png"data-aos="flip-right" data-aos-duration="2000" className='welcome-icon' alt="" />
        <h1 className='welcome-eng'>Welcome</h1>
        <h1 data-aos="zoom-in-up" data-aos-duration="2000" >እንኳን ደህና መጡ</h1>
    </div> */}
    <div className="login-container-right">
        <form action=""className='login-form'>
            <h1 className='login-title'>Login</h1>
            <label htmlFor="">Username:</label>
            <input type="text" name className='login-input-field'  id="" />
            <label htmlFor="">Password:</label>
            <input type="password" name className='login-input-field'  id="" />
            <br /><br />
            <button type="submit" className='login-btn'>Login</button>
            <div className="line"></div>
            <button type="submit" className='login-btn'>Sign In With Google  <GrGoogle/></button>
            <p style={{color:'rgba(0, 0, 0, 0.705)',paddingTop:'0.7rem', textAlign:'center'}}>Don't have an account? <span style={{color:" #3963cb",fontWeight:'bold'}}>Sign Up Now!</span> </p>
        </form>
    </div>
    </div>
  )
}

export default Login